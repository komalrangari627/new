// Import default exported models
import techModel from "../models/techSchema.js";
import userModel from "../models/userSchema.js";

// Example controller functions
export const getDetails = async (req, res) => {
    try {
        const data = await techModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllLanguages = async (req, res) => {
    try {
        const languages = await techModel.find();
        res.json(languages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ...other controller functions
