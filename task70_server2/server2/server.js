import express from "express"
import anything from "./script.js"
import xyz from "./script2.js"

import { data1, data2, dothing } from "./script3.js"
import { dothing2 } from "./script3.js"

import anything from "./script3.js"

// import as

let port = 5001

let app = express()

console.log("got some data", anything)
console.log(xyz)
console.log(data2)
dothing()
dothing2()
console.log(anything)

app.get("/", (req, res) => {
    res.send("got this message from backend !")
})

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})