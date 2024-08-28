import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();   

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongo db connected successfully!!")

}).catch((err)=>{
    console.log(err)
})

const app = express();

app.listen(3000, ()=>{
    console.log("port started at 3000!")
    
})






