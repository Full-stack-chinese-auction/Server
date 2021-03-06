const express = require('express')
 const products = require("../controllers/productController")
 const router = express.Router()
 
router.post('',  products.addProduct)
router.get('',products.getAllProduct)
router.delete('/:id',products.deledteBtId)
router.get('/:id',products.getProductById)

module.exports = router;