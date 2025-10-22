// task75_registeruser/db/connection.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

export default mongoose;
