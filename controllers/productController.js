const { Product } = require("../models/product.model");

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
    let search = await Product.findByIdAndDelete(s => s._id === id)
    return req.send(serch)
}
module.exports = { addProduct, getAllProduct, deledteBtId, getProductById }