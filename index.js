const express = require("express")
const product = require("./routers/product.router")

const app = express()
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/chineseAuction").then(() => {
    console.log("connected to mogodb")
}).catch(err => console.log(err));
app.use(express.json)
app.listen(4500, () => { console.log("waiting") })