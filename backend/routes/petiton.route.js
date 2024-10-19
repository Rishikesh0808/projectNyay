const exp=require('express')
const petitioning=require('../controllers/petition.controllers')
const router=exp.Router();
router.post('/petition',petitioning)
module.exports=router;