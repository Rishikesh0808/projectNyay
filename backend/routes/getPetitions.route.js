// backend/routes/petitionRoutes.js
const getPetitions = require('../controllers/getPetition.controllers'); // Adjust the path as needed
const express = require('express');
const router = express.Router();

// Define the route for getting petitions
router.get("/getPetitions", getPetitions);

// Export the router instance
module.exports = router; 
