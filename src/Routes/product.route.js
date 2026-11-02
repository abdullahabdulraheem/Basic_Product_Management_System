const express = require('express');
const productRoute = express.Router();
const { createProduct, getAllProducts, updateProductPatch, updateProductPut, getSingleProduct, deleteProduct } = require('../controllers/product.controller');

productRoute.post('/', createProduct);
productRoute.patch('/:id', updateProductPatch);
productRoute.put('/:id', updateProductPut);
productRoute.get('/', getAllProducts);
productRoute.get('/:id', getSingleProduct);
productRoute.delete('/:id', deleteProduct)


module.exports = productRoute;