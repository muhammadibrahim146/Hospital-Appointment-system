import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is conected successfully");
    } catch (error) {
        console.log("Error in conecting database",error);
    }
}
export default connectDb;