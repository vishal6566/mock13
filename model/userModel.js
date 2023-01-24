const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please enter your name"]
    },
    email:{
        type:String,
        require:[true,"Please enter your email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please enter an email"],
      
        minLength:[6,"Password must be atleast 6 characters long"]
    }
},{timestamps:true})

userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(5)
    const hashedPassword=await bcrypt.hash(this.password,salt)
    this.password=hashedPassword
    next()
})

const User=mongoose.model("user",userSchema)
module.exports=User