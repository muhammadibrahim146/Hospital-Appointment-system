import mongoose from "mongoose";
const DoctorProfileSchema=new mongoose.Schema({

userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,

},
specialization:{
    type:String,
    required:true,

},
qualification:{
    type:String,
    required:true,
},
experience:{
    type:Number,
    required:true,
},
fee:{
    type:Number,
    required:true,

},
bio:{
    type:String,
},

availableSlotes:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Slote",
    },

],
ratings:[{
    type:Number,
    required:true,
}]

});
export const DoctorProfile=mongoose.model("DoctorProfile",DoctorProfileSchema);
