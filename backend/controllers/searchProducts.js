const { asyncHandler } = require("../service/asyncHandler.js")
const { Product } = require("../models/product.model.js")
let searchProduct = asyncHandler(async (req, res) => {

    const { all, search, category } = req.body;
    let data = await Product.find();

    let newData = data.filter((ele) => {
        const regex = new RegExp(`${search.toLowerCase()}`);
        if (all) {
            return true;
        }
        else if (category.length == 0 && !all) {
            let str = ele.name.toLowerCase();
            return regex.test(str);
        }
        else if (category.includes(ele.category) && search.length === 0) {
            return true;
        } else if (category.includes(ele.category) && search.length > 0) {
            let str = ele.name.toLowerCase();
            return regex.test(str);
        } else if (!category.includes(ele.category) && search.length != 0 && category.length == 0) {
            let str = ele.name.toLowerCase();
            return regex.test(str);
        }
        else {
            return false;
        }
    });

    res.json({ status: true, products: newData });


})
module.exports = { searchProduct }