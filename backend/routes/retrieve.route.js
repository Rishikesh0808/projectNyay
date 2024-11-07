const express=require('express');
const retrieve=require('../controllers/retrieve.controllers')
const  router=express.Router();
router.get('/retrieve/:acknowledgement_no',retrieve);
module.exports=router