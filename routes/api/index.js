const router = require('express').Router();
const orderRoutes = require('./orderRoutes');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

router.use('/order', orderRoutes);
router.use('/product', productRoutes);
router.use('/user', userRoutes);

module.exports = router;
