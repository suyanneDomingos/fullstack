const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.get('/', async (req, res) => {
const users = await User.findAll();
res.json(users);
});
router.post('/', async (req, res) => {
const { name, cpf, birthdate, email } = req.body;
const newUser = await User.create({ name, cpf, birthdate, email });
res.json(newUser);
});
module.exports = router;
