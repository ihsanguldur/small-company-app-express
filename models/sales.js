'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Sales extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Sales.belongsTo(models.Customer, {foreignKey: 'customerId'});
            Sales.belongsTo(models.Product, {foreignKey: 'productId'});
        }
    }

    Sales.init({
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Sales',
        paranoid: true
    });
    return Sales;
};