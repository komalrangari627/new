// task75_registeruser/index.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connection.js";
import mongoose from "./database/connection.js";   // same instance



dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5011;

connectDB();
app.use(express.json());
app.listen(PORT, () => console.log(`server is running on port ${PORT} !`));
