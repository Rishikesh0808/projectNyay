const express=require('express');
const router=express.Router();
const addPoliceOfficer=require('../controllers/addpolice.controllers.js')
router.post("/addpolice",addPoliceOfficer);
module.exports=router;