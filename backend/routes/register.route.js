const exp=require('express')
const register=require('../controllers/register.controllers.js')
const router=exp.Router();
router.post("/register",register);
module.exports=router;