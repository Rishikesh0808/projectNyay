const Lawyer = require('../models/lawyers.model'); // Import the Lawyer model

const addLawyer = async (req, res) => {
    const { name, type, jurisdiction, phone, email } = req.body;

    // Create a new lawyer instance
    const newLawyer = new Lawyer({
        name,
        type,
        jurisdiction,
        phone,
        email
    });

    try {
        // Save the lawyer to the database
        await newLawyer.save();
        res.status(201).json({ message: 'Lawyer added successfully', lawyer: newLawyer });
    } catch (error) {
        res.status(400).json({ message: 'Error adding lawyer', error });
    }
};
module.exports=addLawyer;
