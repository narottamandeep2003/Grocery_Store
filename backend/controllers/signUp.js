const { asyncHandler } = require("../service/asyncHandler.js")
const { User } = require("../models/user.model.js")
let signUp = asyncHandler(async (req, res) => {
    const { email, userName, password, confirmPassword } = req.body
    console.log(email, userName, password, confirmPassword)
    let user = new User({ email: email, userName: userName, password: password,role:"user" })
    await user.save();
    res.json({ status: true});
})
module.exports = { signUp }