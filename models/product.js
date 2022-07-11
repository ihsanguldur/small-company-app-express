'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.hasMany(models.Sales, {foreignKey: 'productId'});
        }
    }

    Product.init({
        name: {
            type: DataTypes.STRING(24),
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(24),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        sequelize,
        modelName: 'Product',
        paranoid: true
    });
    return Product;
};