const express = require('express');
const noting=require('../controllers/noting.controllers')
const router = express.Router();
router.put('/noting/:ack',noting);
module.exports=router;
