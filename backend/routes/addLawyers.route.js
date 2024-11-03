const express = require('express');
const router = express.Router();
const addLawyer= require('../controllers/addLawyers.controllers');

// Route to add a new lawyer
router.post('/addLawyers', addLawyer);

module.exports = router;
