const { Product } = require("../models/product.model");

const addProduct = async (req, res) => {

    let p = new Product(req.body)
    try {
        await p.save();
        res.status(200).send(`add product`);
    }
    catch (err) {
        res.status(400).send(err);
    }
}

const getAllProduct = async (req, res) => {
    let products = Product.find({})
    res.send(products)
}

const getProductById = async (req, res) => {

    const product = await Product.findById(req.params.id)
    if (!product) {
        res.send("the product is not found")
        return
    }
    res.send(product)
}
const deledteBtId = async (req, res) => {
    let id = req.params.id
    let search = await Product.findByIdAndDelete(s => s.id === id)
    req.send(serch)
}
module.exports = { addProduct, getAllProduct ,deledteBtId,getProductById}