const express = require('express');
const noting=require('../controllers/noting.controllers')
const router = express.Router();
router.put('/noting/:acknowledgement_no',noting);
module.exports=router;
