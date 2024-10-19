const jwt=require('jsonwebtoken')
const dotenv=require('dotenv');
dotenv.config();
const jwtmiddleware= (req,res,next)=>{
    if(req.path=='/login')
    {
        return next();
    }
   const token=req.header('Authorization');
   const maintoken=token.split(' ')[1];
   console.log({maintoken});
   const isVerified=  jwt.verify(maintoken,process.env.key)
  if(isVerified)
  {
    next();
  }
  else{
    res.status(401).json({message:"wrong token"});
  }
}
module.exports=jwtmiddleware
