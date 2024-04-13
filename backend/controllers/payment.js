const { BuyProduct } = require("../models/buyProduct.model.js")
const { Payment } = require("../models/payment.model.js")
const { asyncHandler } = require("../service/asyncHandler.js")
const mongoose=require("mongoose")
let payment = asyncHandler(async (req, res) => {
    const cardHolderName=req.body.cardHolderName
    const cardNumber=req.body.cardNumber
    const total=req.body.total
    const products=req.body.products
    const userid=req.body.userid

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let payment=await Payment.create({userid:userid,cardHolderName:cardHolderName,cardNumber:cardNumber,total:total})
        products.forEach(async(element) => {
            await BuyProduct.create({userid:userid,paymentid:payment._id,name:element.name,category:element.category,price:element.price});
        });
        await session.commitTransaction();
        session.endSession();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.json({ status: false });
    }
    res.json({ status: true });
})
module.exports = { payment }