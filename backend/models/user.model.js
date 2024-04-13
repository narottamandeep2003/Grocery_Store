const mongoose = require('mongoose')

const user = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
    }
})
const User = new mongoose.model("User", user)
module.exports = { User }