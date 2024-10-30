const casemodel=require('../models/cases.model.js')
const track=async (req,res)=>{
    console.log("entered");
    const {caseNumber}=req.query
    console.log({caseNumber});
    const user=await  casemodel.find({case_Number:caseNumber});
    
    
    if(user.length>0)
    {
        res.send(user[0]);
    }
    else
    {
        console.log("user not found")
    }
}
module.exports=track;
