const express=require('express');
const retrieve=require('../controllers/retrieve.controllers')
const  router=express.Router();
router.get('/retrieve/:ack',retrieve);
module.exports=router