// controllers/authController.js
const User = require('../models/users.model');

// Function to add a new police officer
const addPoliceOfficer = async (req, res) => {
  try {
    const { username, password, email } = req.body;
const role="Police"
    // Check if all required fields are provided
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    // Check if username or email already exists in the database
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Create new user
    const newUser = new User({ username, password,  role:role});
    await newUser.save();

    return res.status(201).json({ message: 'Police officer added successfully', user: newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error adding police officer', error });
  }
};

module.exports =  addPoliceOfficer ;
