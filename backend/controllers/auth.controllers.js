const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const dotenv = require('dotenv');
dotenv.config();

const authenticate = async (req, res) => {
    const { username, password ,role} = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    // Find the user by username
    const user = await User.findOne({ username });
    
    // Check if the user exists and the password matches
    if (!user || user.password !== password||user.role!==role) {
        return res.status(400).json({ message: "Invalid username or password" });
    }

    // Create JWT token
    const jwttoken = jwt.sign({ userid: username }, process.env.key, {
        algorithm: 'HS256',
        expiresIn: '1h'
    });

    // Check if token was created
    if (!jwttoken) {
        console.log('No token');
        return res.status(500).json({ message: "Error generating token" });
    }

    // Send the token
    console.log({jwttoken})
    return res.status(201).json(jwttoken);
    
};

module.exports = authenticate;
