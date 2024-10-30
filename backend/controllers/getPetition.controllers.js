const Petition = require('../models/petition.model');
const getPetitions=async (req,res)=>
{
try{
    const Allpetitions=await Petition.find({status:"new"});
    res.status(201).json(Allpetitions);
}
catch{
    console.log("error occurred");
    res.status(404).json("error occurred");
}
}
module.exports=getPetitions