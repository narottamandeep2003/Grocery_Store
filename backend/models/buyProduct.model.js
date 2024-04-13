const mongoose = require('mongoose')

const buyProduct = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    paymentid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})
const BuyProduct = new mongoose.model("BuyProduct", buyProduct)
module.exports = { BuyProduct }