import express from "express";
import cors from "cors";
import axios from "axios";
import assign from "object-assign";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    const baseData = { project: "API + Vite Integration" };
    const extraData = { author: "Komal", date: new Date().toLocaleString() };
    const mergedData = assign({}, baseData, extraData);

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

    res.json({
      message: "Backend is running with CORS & object-assign!",
      mergedData,
      sample: response.data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5017;

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
