const express = require('express');
const router = express.Router();
const productRoutes = require('./product.route');

router.use('/products', productRoutes);
// router.use('/users', userRoutes);

module.exports = router;