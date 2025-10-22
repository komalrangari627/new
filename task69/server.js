// server.js
import express from "express";

const app = express();
const PORT = 5005;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running with Express 5!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
