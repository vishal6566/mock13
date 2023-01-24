const mongoose=require("mongoose")

const adSchema=mongoose.Schema({

company:{
 
    type:String,
        require:[true,"Please enter your name"]
},
position:{
 
    type:String,
        require:[true,"Please enter your name"]
},
contract:{
 
    type:String,
        require:[true,"Please enter your name"]
},
location:{
 
    type:String,
        require:[true,"Please enter your name"]
}
})

const Ad=mongoose.model("ad",adSchema)

module.exports=Ad