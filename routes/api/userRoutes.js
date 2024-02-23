const router = require('express').Router();
const { User }  = require('../../models');

// Get all users
router.get('/', async (req, res) => {
  const allUsers = await User.findAll({});
  return res.json(allUsers);
});


// Create User
router.post('/', async (req, res) => {
  const newUser = await User.create(req.body);
  return res.json(newUser);
});

module.exports = router;