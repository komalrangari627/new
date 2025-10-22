import mongoose from "mongoose";

// Define schema first
const techSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String },
    language: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Create model
const techModel = mongoose.model("Tech", techSchema);

// Default export
export default techModel;
