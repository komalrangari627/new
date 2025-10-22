import express from "express";
import { getDetails, getFilterData, getRandomLanguage, getAllLanguages, getLanguageBasedOnId, postAddLanguage } from "../controllers/controller.js";
import { checkAdmin } from "../middlewares/checkAdmin.js";

const router = express.Router();

// routes
router.get("/get-details", getDetails);
router.get("/all", getAllLanguages);
router.get("/random/language", getRandomLanguage);
router.get("/get-language/:id", getLanguageBasedOnId);
router.get("/filter", getFilterData);

// protected route example
router.post("/add-language", checkAdmin, postAddLanguage);

export { router };
