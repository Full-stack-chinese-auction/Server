const { Product } = require("../models/product.model");
const mongoose = require("mongoose");

const addProduct = async (req, res) => {

    let p = new Product(req.body)
    try {
        await p.save();
        return res.status(200).send(`add product`);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

const getAllProduct = async (req, res) => {
    let products = await Product.find({})
    return res.send(products)
}

const getProductById = async (req, res) => {

    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.send("the product is not found")
    }
    return res.send(product)
}
const deledteBtId = async (req, res) => {
    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            await Product.findByIdAndDelete(id)
            return res.send(`delete sucssefuly ${id} product`)
        }
        catch{
            return res.send('not find the id')
        }
}
    module.exports = { addProduct, getAllProduct, deledteBtId, getProductById }