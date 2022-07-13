const {Customer} = require('../models');
const CustomError = require('../utils/CustomError');
const asyncHandler = require('express-async-handler');
const {successPresenter} = require('../utils/presenter');
const generateToken = require('../utils/generateJWT');

const create = asyncHandler(async (req, res, next) => {
    const {name} = req.body;
    if (!name) {
        next(new CustomError(400, 'Name is Required.'));
    }

    const customer = await Customer.create({name});

    successPresenter(res, 'Customer Created.', customer);
})

const getAll = asyncHandler(async (req, res, next) => {
    const customers = await Customer.findAll();

    successPresenter(res, 'All Customers Found.', customers);
})

const login = asyncHandler(async (req, res, next) => {
    const {id} = req.body;

    const customer = await Customer.findByPk(id);
    if (!customer) {
        next(new CustomError(400, 'There is no User with ID: ' + id));
    }

    const token = generateToken(id);

    successPresenter(res, 'Logged.', {customer, token});
})

module.exports = {
    create,
    getAll,
    login
}