const mongoose = require('mongoose')

const payment = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    cardHolderName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    }
})
const Payment = new mongoose.model("Payment", payment)
module.exports = { Payment }