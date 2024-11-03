const Petition = require('../models/petition.model');

const petitioning = async (req, res) => {
    try {
        const { 
            name, email, phone, incidentType, incidentDate, 
            incidentLocation, incidentDescription, policeStation 
        } = req.body;

        // Generate the acknowledgment ID
        const timestamp = Date.now().toString();
        const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
        const acknowledgement_no = `ACKNOWLEDGEMENT-${timestamp}-${randomNum}`;

        

        // Create a new petition with the generated ack
        const newpetition = new Petition({
            name,
            email,
            phone,
            incidentType,
            incidentDate,
            incidentLocation,
            incidentDescription,
            policeStation,
            acknowledgement_no,
            status:"new"  // Include the ack field in the document
        });

        console.log('New Petition:', newpetition);

        // Save the petition to the database
        await newpetition.save();

        // Respond with the ack and a success status code (201)
        res.status(201).send(acknowledgement_no);
    } catch (error) {
        console.error("Error occurred while creating the petition:", error);

        // Send a 500 status code with an error message
        res.status(500).json({ message: "Error occurred while creating the petition" });
    }
};

module.exports = petitioning;
