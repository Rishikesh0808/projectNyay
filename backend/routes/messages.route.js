const express=require('express');
const fetchmessages=require('../controllers/fetchmessages.controllers.js')
const router=express.Router();
router.get("/messages",fetchmessages);
module.exports=router;
