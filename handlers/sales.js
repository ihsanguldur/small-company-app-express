const {Sales, Product, Customer} = require('../models');
const asyncHandler = require('express-async-handler');
const CustomError = require('../utils/CustomError');
const {successPresenter} = require("../utils/presenter");

const buy = asyncHandler(async (req, res, next) => {
    const {code, quantity} = req.query;
    const {id} = req.customer;
    if (!code || !quantity) {
        return next(new CustomError(400, 'Code and Quantity is Required.'));
    }

    if (quantity <= 0) {
        return next(new CustomError(400, 'Why????'));
    }

    const product = await Product.findOne({where: {code}});
    if (!product) {
        return next(new CustomError(400, 'There is no Product with Code: ' + code));
    }

    product.quantity -= quantity;
    if (product.quantity < 0) {
        return next(new CustomError(406, 'Please Enter a Valid Product Quantity.'));
    }
    await product.update({quantity: product.quantity}, {where: {id: product.id}, returning: true, plain: true});

    await Sales.create({productId: product.id, customerId: id, quantity});

    successPresenter(res, 'Product Sold.', product);
})

const getSales = asyncHandler(async (req, res, next) => {
    const {id} = req.customer;

    const sales = await Sales.findAll({
        where: {customerId: id},
        include: [Product],
        attributes: {exclude: ['customerId', 'productId']}
    });

    successPresenter(res, 'Sales Found.', sales);
})

module.exports = {
    buy,
    getSales
}