const express = require('express');
const { enterPayment } = require('../controllers/payment.controllers'); // Correct path to controller
const router = express.Router();
router.post('/enter', enterPayment);
module.exports = router;



