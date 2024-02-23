const router = require('express').Router();
const {Product} = require('../../models');

router.post('/', async (req, res) => {
  const newProduct = await Product.create(req.body);
  return res.json(newProduct);
});

router.get('/', async (req, res) => {
  const pData = await Product.findAll({});
  return res.json(pData);
});

module.exports = router;
