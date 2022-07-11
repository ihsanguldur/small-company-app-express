const express = require('express');
const productRoute = require('./product');
const customerRoute = require('./customer');
const salesRoute = require('./sales');

const router = express.Router();

router.use('/product', productRoute);
router.use('/customer', customerRoute);
router.use('/sales', salesRoute);

module.exports = router;