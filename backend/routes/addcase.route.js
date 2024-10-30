const express = require('express');
const router = express.Router();
const  addCase  = require('../controllers/addcases.controllers');

// Route to add a new case
router.post('/addcase', addCase);

module.exports = router;
