import User from "../model/User.model.js";
import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken";

export const registerUser=async(req,res)=>{
    try {

        const{ name ,email,password,role,phoneNumber,avatar}=req.body
if(!name||!email||!password){
    return res.status(400).json({message:"Please provide all required field"});
}
const existingUser=await User.findOne({email});

if(existingUser){
    return res.status(409).json({message:"User aleady exists"});
}
const allowedRoles=["patient","doctor","labstaff"];
if(role&& !allowedRoles.includes(role)){
    return res.status(400).json({message:"Invalid role specified"});
}
const hashedPassword=await bcrypt.hash(password,10);
const newUser=await  User.create({
    name,
    email,
    password:hashedPassword,
    role:role||"patient",
    phoneNumber,
    avatar,

})
 await newUser.save();
 const token = jsonwebtoken.sign({userId:newUser._id,role:newUser.role},process.env.JWT_SECRET,{
expiresIn:"7d",
 });
 res.cookie("token",token,{
    httpOnly:true,
    secure:false,
    sameSite:"Lax",
    maxAge:7*24*60*60*1000,
 })
 
 return res.status(201).json({message:"User registered successfully",token,user:{
    id:newUser._id,
    name:newUser.name,
    role:newUser.role,
 }});

    } catch (error) {
        console.log("Error registering user:",error);
        return res.status(500).json({message:"INternal server error"});
    }
}

export const loginUser = async(req,res)=>{
try {
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({message:"Please provide all required field"});
    }
    const user=await User.findOne({email});
    if(!user){
        return res.json({message:"invalid email or password"});
    }
    const isMatch= await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({message:"Inavlid email or password"});
    }
    const token=jsonwebtoken.sign({userId:user._id,role:user.role},process.env.JWT_SECRET,{
        expiresIn:"7d",
    });
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"Lax",
        maxAge:7*24*60*60*1000,
    })
    return res.status(200).json({message:"Login successfull",token,user:{
        id:user._id,
        name:user.name,
        role:user.role,

    }})
    
} catch (error) {
console.log("Error logging in user",error);
return res.json({message:"Internal server error"});

}
}

export const logout=async(req,res)=>{
    try{
const token =req.cookies.token;


    }
    catch(error){

    }
}
