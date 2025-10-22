import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/conn.js";

dotenv.config({ path: "config.env" });

const app = express();
const port = process.env.PORT || 5012;

connectDB();

app.use(express.json());
app.get("/", (req, res) => res.send("Server Running 🚀"));

app.listen(port, () => {
  console.log(`Server is running on port ${port} !`);
});
