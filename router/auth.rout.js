
import express from "express";
import { registerUser,loginUser } from "../controller/User.controller.js";

const authrouter=express.Router();
authrouter.post("/register",registerUser);
authrouter.post("/Login",loginUser);

export default authrouter;

