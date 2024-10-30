const lawyer = require("../models/lawyers.model");

const getlawyers = async (req, res) => {
  try {
    // Directly calling find() returns an array of lawyer documents
    const allLawyers = await lawyer.find(); // No need for .toArray()
    
    console.log(allLawyers); // Debugging line
    res.status(200).json(allLawyers); // Use 200 for successful responses
  } catch (error) {
    console.error("Error occurred:", error); // Log the actual error
    res.status(500).send("An error occurred"); // Use 500 for server errors
  }
};

module.exports = { getlawyers };
