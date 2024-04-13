const express=require("express");
const {signUp} = require("../controllers/signUp.js");
const {login} = require("../controllers/login.js");
const {product} = require("../controllers/product.js");
const {searchProduct} = require("../controllers/searchProducts.js");
const {payment} = require("../controllers/payment.js");
const router=express.Router();
router.post("/signUp",signUp)
router.post("/login",login)
router.get("/getProducts",product)
router.post("/getProducts",searchProduct)
router.post("/payment",payment)
module.exports ={router}