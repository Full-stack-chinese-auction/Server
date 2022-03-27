const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    item_name: String,
    item_description: String,
    item_price: Number
});
const Product = mongoose.model("products",productSchema);
module.exports={productSchema,Product}