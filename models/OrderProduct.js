const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./Product');
const Order = require('./Order');

class OrderProduct extends Model {}

OrderProduct.init(
  {
    orderId: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      references: {
        model: Order,
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: 'order_product',
  }
);

module.exports = OrderProduct;
