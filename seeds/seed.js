const sequelize = require('../config/connection');
const { User, Product } = require('../models');

const userSeedData = require('./userSeedData.json');
const productSeedData = require('./productSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userSeedData);
  const products = await Product.bulkCreate(productSeedData);
  process.exit(0);
};

seedDatabase();
