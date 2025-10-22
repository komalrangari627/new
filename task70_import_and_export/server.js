import express from "express";

// Default imports
import data from "./script.js";     // default export from script.js
import xyz from "./script2.js";     // default export from script2.js
import something, { data1, data2, dothing, dothing2 } from "./script3.js"; // default + named imports

const app = express();
const port = 5007;

// Use imported values
console.log("Data from script.js:", data);
console.log("Default from script2.js:", xyz);
console.log("From script3.js -> data1:", data1);
console.log("From script3.js -> data2:", data2);
dothing();
dothing2();
console.log("Default export from script3.js:", something);

app.get("/", (req, res) => {
  res.send("Got this message from backend!");
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
