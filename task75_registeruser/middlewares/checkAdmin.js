import userModel from "../models/userSchema.js";

export const checkAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.userId);
        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
