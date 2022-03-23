const express = require('express')
 const products = require("../controllers/productController")
 const router = express.Router()
 
router.post('/product',  products.addProduct)
router.get('/product',products.getAllProduct)
router.post('/product',products.deledteBtId)
router.get('/product/:id',products.getProductById)

module.exports = router;