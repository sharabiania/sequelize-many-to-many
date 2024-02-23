const Order = require('./Order');
const Product = require('./Product');
const User = require('./User');
const OrderProduct = require('./OrderProduct');

Order.belongsTo(User);
User.hasMany(Order);

// OrderProduct.hasMany(Order);
// OrderProduct.hasMany(Product);

Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });

// OrderProduct.belongsTo(Order);
// OrderProduct.belongsTo(Product);

module.exports = { Product, Order, User };
