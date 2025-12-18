import { createDoctorProfile } from "../controller/Doctor.controller.js";
import express from "express";

const doctor=express.Router();
doctor.post("/create-doctor-profile",createDoctorProfile);
export default doctor;
