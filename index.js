import express from "express";
import authrouter from "./router/auth.rout.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import doctor from "./router/doctor.rout.js";
dotenv.config();
await connectDb();
const app=express();
app.use(express.json());
//app.use(cros());
app.use("/api/auth",authrouter);
app.use("/api/doctor",doctor)
app.get("/",(req,res)=>{
    res.send("Server is woking");
 });
  app.listen(3000,()=>{
    console.log("Server is running on port 3000");
  });
