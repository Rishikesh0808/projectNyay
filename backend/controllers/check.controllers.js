const Petition = require('../models/petition.model');
const checkAcknowledgement = async (req, res) => {
    try {
        const { acknowledgement_no } = req.params;
          console.log(acknowledgement_no);
        
        const petition = await Petition.findOne({ acknowledgement_no });

        if (!petition) {
            
            return res.status(404).json({ message: "Petition not found" });
        }

        const status = petition.status 
        if(status=="new")
        {
                  return res.status(201).json("new");
        }
        else
        {
            res.status(201).json("acknowledged");
        }
    } catch (err) {
        console.error("Error while checking acknowledgement:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports =  checkAcknowledgement ;
