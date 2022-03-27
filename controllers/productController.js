const { Product } = require("../models/product.model");
const mongoose = require("mongoose");

const addProduct = async (req, res) => {

    let p = new Product(req.body)
    try {
    let newP=await p.save();
    return res.status(200).send(`add product ${newP}`);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

const getAllProduct = async (req, res) => {
    try {
        let products = await Product.find({})
        return res.send(products)
    }
    catch {
        return res.send(400).send(err);
    }
}

const getProductById = async (req, res) => {
    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            const product = await Product.findById(id)
            return res.send(product)
        }
        catch {
            return res.send(400).send(err);
        }
    }
    else {
        return res.send("not find the id")
    }
}
const deledteBtId = async (req, res) => {
    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            await Product.findByIdAndDelete(id)
            return res.send(`delete sucssefuly ${id} product`)
        }
        catch {
            return res.send(400).send(err);
        }
    }
    else {
        return res.send("not valid id")
    }
}
module.exports = { addProduct, getAllProduct, deledteBtId, getProductById }