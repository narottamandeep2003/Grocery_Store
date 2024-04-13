const express=require("express");
const {signUp} = require("../controllers/signUp.js");
const {login} = require("../controllers/login.js");
const {product} = require("../controllers/product.js");
const router=express.Router();
router.post("/signUp",signUp)
router.post("/login",login)
router.get("/",product)
module.exports ={router}