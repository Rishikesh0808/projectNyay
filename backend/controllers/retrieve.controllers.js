// Assuming you have already required your model
const Petition = require('../models/petition.model.js'); // Replace with your actual model path

const retrieve = async (req, res) => {
  try {
    const { acknowledgement_no } = req.params;
          console.log(acknowledgement_no); // Extracts the `ack` parameter from the request
   
    const caseRecord = await Petition.findOne({ acknowledgement_no: acknowledgement_no });

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
