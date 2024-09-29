
const express = require('express');
const { createUser } = require('./userController');
const router = express.Router();

// Route to create a new user
router.post('/', createUser);

module.exports = router;
