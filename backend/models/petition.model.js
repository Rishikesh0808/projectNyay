const mongoose = require('mongoose');

const petitionSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    email:{type:String,required:true},
    phone: { type: String, required: true },
    incidentType: { type: String, required: true },
    incidentDate: { type: String, required: true },
    incidentLocation: { type: String, required: true },
    incidentDescription: { type: String, required: true },
    policeStation: { type: String, required: true },
    acknowledgement_no:{ type:String,required:true}
}, { collection: 'petitions' });

const Petition = mongoose.model('Petitions', petitionSchema);

module.exports = Petition;
