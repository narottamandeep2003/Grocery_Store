const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        console.log(error)
        res.json({status:false,message:error})
    }
}
module.exports = {asyncHandler};