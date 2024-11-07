const Petition=require('../models/petition.model')
const noting= async (req, res) => {
    const { acknowledgement_no } = req.params;
    try {
      console.log(acknowledgement_no);
      // Update petition where ack matches, setting status to 'acknowledged'
      const updatedPetition = await Petition.findOneAndUpdate(
        { acknowledgement_no },
        { status: 'noted' },
        {new:true}
      );
    
  
      if (!updatedPetition) {
        return res.status(404).json({ message: 'Petition not found' });
      }
  
      res.status(200).json({ message: 'Petition acknowledged', data: updatedPetition });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }}
    module.exports=noting;