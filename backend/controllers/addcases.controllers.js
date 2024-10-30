const CaseModel = require('../models/cases.model');
const addCase = async (req, res) => {
    try {
        const caseData = req.body;
     
        const newCase = new CaseModel(caseData);
        console.log(newCase);
        await newCase.save();
        res.status(201).json({ message: 'Case added successfully', case: newCase });
    } catch (error) {
        res.status(500).json({ message: 'Error adding case', error });
    }
};

module.exports = addCase;
