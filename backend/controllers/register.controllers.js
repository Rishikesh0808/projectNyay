const User=require('../models/users.model');
const register=async (req,res)=>{
    try{
    const{username,password}=req.body;
    
    const newuser=new User({
        username:username ,
        password:password,
        role:"Citizen"
    })
    console.log(newuser);

    await newuser.save();
    res.status(201).send("successful");
}
    catch{
        console.log("not registered")
        res.status(404).send("unsuccessful");
    }

}
module.exports= register;
