const {getlawyers}=require('../controllers/laywers.controllers.js')
const exp=require('express');
const router=exp.Router();
router.get("/lawyers",getlawyers);
module.exports=router