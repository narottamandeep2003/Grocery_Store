const mongoose = require('mongoose')

const product = new mongoose.Schema({
    name: {
        type: String
    },
    imgUrl: {
        type: String
    },
    category: {
        type: String,
    },
    text:{
        type: String,
    },
    price:{
        type: Number,
    },
    stock:{
        type: Number,
    }
})
const Product = new mongoose.model("Product", product)
module.exports = { Product }