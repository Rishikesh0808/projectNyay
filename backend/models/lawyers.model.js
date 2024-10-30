const mongoose=require('mongoose');
const lawyerschema= new mongoose.Schema({
    name:String,
    type:String,
    jurisdiction:String,
    phone:String,
    email:String
},{collection:'lawyers'})
const lawyer=mongoose.model('lawyers',lawyerschema);
module.exports=lawyer;