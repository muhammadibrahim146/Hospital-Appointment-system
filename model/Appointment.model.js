import mongoose from "mongoose";
const AppointmentSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },
    SloteId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Slote",
        required:true,

    },
    status:{
        type:String,
        enum:["pending ","confirmed","completed","cancelled"],
        deafult:"pending",
    },
    notes:{
        type:String,

    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})
export const AppointmentSchemamodel=mongoose.model("Appointment",AppointmentSchema);
