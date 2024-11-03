const express = require('express');
const router = express.Router();
const  checkAcknowledgement  = require('../controllers/check.controllers');
router.get('/check/:acknowledgement_no', checkAcknowledgement);
module.exports = router;
