const express=require("express")
const{ postAd, getAd }= require("../controller/adController")
 

const router=express.Router()
router.get("/ad",getAd)
router.post("/ad",postAd)

module.exports=router