// database/conn.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI not found in environment variables");

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default connectDB;
