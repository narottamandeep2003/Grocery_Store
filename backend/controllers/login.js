const { asyncHandler } = require("../service/asyncHandler.js")
const { User } = require("../models/user.model.js")
let login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    let user = await User.findOne({ email: email, password: password })
    if (user) {
        res.json({ status: true, user: user });
    }
    else {
        res.json({ status: false });
    }
})
module.exports = { login }