// Assuming you have already required your model
const Petition = require('../models/petition.model.js'); // Replace with your actual model path

const retrieve = async (req, res) => {
  try {
    const { ack } = req.params; // Extracts the `ack` parameter from the request
    console.log(ack);
    const caseRecord = await Petition.findOne({ ack: ack });

    if (!caseRecord) {
      return res.status(404).json({ message: 'Case not found' });
    }

    res.json(caseRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = retrieve;
