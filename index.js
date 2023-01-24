const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv").config()
const connect=require("./config/db")
const userRouter=require("./routes/userRouter")
const adRouter=require("./routes/adRouter")
const app=express()
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("hi")
})
app.use("/",userRouter)
app.use("/",adRouter)
app.listen(PORT,async()=>{
    await connect()
    console.log("listening on port"+PORT)
})