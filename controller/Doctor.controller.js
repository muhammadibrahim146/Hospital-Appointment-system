import { DoctorProfile } from "../model/Doctor.model.js";

export const createDoctorProfile=async(req,res)=>{
    try {
        const{userId,specialization,qualification,experience,fee,bio,availableSlotes}=req.body;
        if(!userId||!specialization||!qualification||!experience||!fee){
            return res.status(400).json({message:"PLease provide all required fileds"});

        }
        const existingDoctorProfile= await DoctorProfile.findOne({userId});
        if(existingDoctorProfile){
            return res.json({message:"Doctor profile is already exists"});

        }
        const newDoctorProfile=await DoctorProfile.create({
            ...req.body,
        });
        await newDoctorProfile.save();
        return res.status(200).json({message:"Doctor profile created successfully",})
    } catch (error) {
        
    }
}
