import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true,
    },
    email:{
        type:String,
        required:true,
        uique:true,

    },
    password:{
        type:String,
        required:true,
        unique:true
    },

    role:{
        type:String,
        enum:["patient","doctor","admin","labstaff"],
 default:"patient",
    },
    phoneNumber:{
        type:Number,
    },
    avatar:{
        type:string,
    
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});
 const User=mongoose.model("User",userSchema);
 export default User;
 