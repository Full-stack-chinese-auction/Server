const express = require("express")
const productRout = require("./routers/product.router")
const winRout=require("./routers/win.router")

const app = express()
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/chineseAuction").then(() => {
    console.log("connected to mogodb")
}).catch(err => console.log(err));
app.use(express.json())
app.use("/product",productRout)
app.use("/win",winRout)
app.listen(4500, () => { console.log("waiting") })