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