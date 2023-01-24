const Ad=require("../model/adModel")
const asyncHandler=require("express-async-handler")

const postAd=asyncHandler(
async(req,res)=>{
    const {company,position,contract,location}=req.body
    if(!company || !position || !contract || !location){
        res.status(400).json({message:"Please fill in all required fields",status:"400"})
    }
    const ad=await Ad.create({
        company,
        position,
        contract,
        location
    })
    if(ad){
        const{_id,company,position,contract,location}=ad
        res.status(201).json({
            _id,company,position,contract,location
            })

      }else{
        res.status(400).json({message:"Invalid ad data",status:"400"})
      
      }
}
)

const getAd=asyncHandler(
    async(req,res)=>{
        const ads=await Ad.find()
        res.status(200).send(ads)
    }
)

module.exports={postAd,getAd}