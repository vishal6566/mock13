const User=require("../model/userModel")
const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const signupUser=asyncHandler(
    async(req,res)=>{
          const {name,email,password}=req.body
          if(!name  ||!email || !password){
            res.status(400).json({message:"Please fill in all required fields",status:"400"})
            
           }
    
           if(password.length<6){
            res.status(400).json({message:"Password must be upto 6 characters",status:"400"})
          
           }
           const userExists= await User.findOne({email})
           if(userExists){
            res.status(400).json({message:"Email is already been register",status:"400"})
            
          }
          const user=await User.create({
         name,
            email,
            password
          })
         
          if(user){
            const{_id,name,email}=user
            res.status(201).json({
                _id,name,email
                })
    
          }else{
            res.status(400).json({message:"Invalid user data",status:"400"})
          
          }
    }
)

const loginUser=asyncHandler(async (req,res)=>{
    const {email,password}=req.body


    if(!email || !password){
      res.status(400).json({message:"Please enter email and password",status:400})
      
    }
  
    
    const user =await User.findOne({email})
  
    if(!user){
      res.status(400).json({message:"User not found, please signup",status:400})
     
    }
 
  
    const passwordIsCorrect=await bcrypt.compare(password,user.password)
  
  
  const token=generateToken(user._id);
  

  
    if(user && passwordIsCorrect){
      const{_id,email}=user
      res.status(200).json({
          _id,email,token
      })
    }else{
      res.status(400).json({message:"Invalid email or password",status:400})
     
    }
  
  })

module.exports={signupUser,loginUser}