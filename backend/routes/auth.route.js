const express = require('express');
const authenticate = require('../controllers/auth.controllers');
const router = express.Router();

// Define the POST route for authentication
router.post('/login', authenticate);

module.exports = router;
