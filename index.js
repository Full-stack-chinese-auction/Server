const express=require("express")
const product=require("./routers/product.router")

const app=express()

app.use(express.json)
app.listen(4500, () => { console.log("waiting") })