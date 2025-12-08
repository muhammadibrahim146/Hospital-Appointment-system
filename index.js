import express from "express";

import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();
await connectDb();
const app=express();
app.use(express.json());
//app.use(cros());

app.get("/",(req,res)=>{
    res.send("Server is woking");
 });
  app.listen(3000,()=>{
    console.log("Server is running on port 3000");
  });
