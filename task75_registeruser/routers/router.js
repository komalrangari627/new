import express from "express";
import { checkAdmin } from "../middlewares/checkAdmin.js";
import { 
    getDetails, 
    getAllLanguages, 
    getFilterData, 
    getRandomLanguage, 
    getLanguageBasedOnId, 
    postAddLanguage 
} from "../../task76_jwt/controllers/controller.js";

const router = express.Router();

router.get("/", (req, res) => res.redirect('get-details'));
router.get("/all", getAllLanguages);
router.get("/get-details", getDetails);
router.get("/filter", getFilterData);
router.get("/random/language", getRandomLanguage);
router.get("/get-language/:id", getLanguageBasedOnId);
router.post("/add-language", checkAdmin, postAddLanguage);

// Default export
export default router;
