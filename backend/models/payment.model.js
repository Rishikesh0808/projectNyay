const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    CNR: { type: String, required: true },
    Name: { type: String, required: true },
    Gender: { type: String, required: true },
    Age: { type: String, required: true },
    Date: { type: String, required: true },
    Fine: { type: Number, required: true }
}, { collection: 'pay' });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
