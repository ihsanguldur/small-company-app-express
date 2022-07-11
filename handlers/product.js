const {Product} = require('../models');
const asyncHandler = require('express-async-handler');
const {successPresenter} = require('../utils/presenter');
const CustomError = require('../utils/CustomError');
const {Op} = require('sequelize');

const create = asyncHandler(async (req, res, next) => {
    const {name, code, quantity} = req.body;
    if (!name || !code) {
        return next(new CustomError(400, 'Name and Code are Required.'));
    }

    const product = await Product.create({name, code, quantity});

    successPresenter(res, 'Product Created.', product);
})

const getAll = asyncHandler(async (req, res, next) => {
    const products = await Product.findAll({
        where:
            {
                quantity: {
                    [Op.gt]: 0
                }
            }
    });

    successPresenter(res, 'All Products Found.', products);
})

const getOne = asyncHandler(async (req, res, next) => {
    const {code} = req.params;

    const product = await Product.findOne({where: {code}});
    if (!product) {
        return next(new CustomError(400, 'There is no Product with Code: ' + code));
    }

    successPresenter(res, 'Product Found.', product);
})

module.exports = {
    create,
    getAll,
    getOne
}