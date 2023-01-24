const express=require("express")
const postAd = require("../controller/adController")
 

const router=express.Router()

router.post("/ad",postAd)

module.exports=router