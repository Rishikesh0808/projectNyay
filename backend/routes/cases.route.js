const  exp=require('express');
const track=require('../controllers/cases.controllers')
const router=exp.Router();
router.get('/tracks',track);
module.exports=router;
