const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const dotenv=require('dotenv')
dotenv.config()
const authenticate = async (req, res) => {
    const { username, password } = req.body;

   
        
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }


        const user = await User.findOne({ username });
if(!(user.password===password))
{
    res.status(400).json({message:"invalid user"});
}
  const jwttoken=jwt.sign({userid:username},process.env.key,{algorithm:'HS256',
                                                            expiresIn:'1h'});
  
  if(!jwttoken)
  {
    console.log('no token');
  }
  res.status(201).json(jwttoken);
};

module.exports = authenticate;
