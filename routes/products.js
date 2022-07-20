const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.get('/', products.allProducts);

router.get('/sale', products.productsOnSale);

router.get('/:id', products.productDetails);

module.exports = router;
