const { asyncHandler } = require("../service/asyncHandler.js")
const { Product } = require("../models/product.model.js")
let product = asyncHandler(async (req, res) => {
    let data = await Product.find();
    console.log(data)
    res.json({ status: true,products:data});
})
module.exports = { product }