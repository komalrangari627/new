import express from "express"
import { checkAdmin } from "../middlewares/checkAdmin.js"
import { getDetails, getFilterData, getRandomLanguage, getAllLanaguages, getLanguageBasedOnId, postAddLanaguage } from "../controllers/controller.js"

let router = express.Router()

app.get('/test/hello', (req, res) => {
  res.json({
    message: "Backend connected successfully",
    checkCode: 200,
    userData: { name: "John Doe", phone: "9999999999" }
  });
});


router.get("/all", getAllLanaguages)

router.get("/get-details", getDetails)

router.get("/filter", getFilterData)

router.get("/random/language", getRandomLanguage)

router.get("/get-language/:id", getLanguageBasedOnId)

router.post("/add-language", checkAdmin, postAddLanaguage)

export { router }