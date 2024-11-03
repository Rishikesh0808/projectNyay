const casemodel=require('../models/cases.model.js')
const track=async (req,res)=>{
    console.log("entered");
    const {caseNumber}=req.query
    console.log({caseNumber});
    const user=await  casemodel.find({caseNumber:caseNumber});
    
    
    if(user.length>0)
    { console.log(user);
       return  res.send(user[0]);
    }
    else
    {
        console.log("user not found")
    }
    return res.send({message:"user not found"})
}
module.exports=track;
