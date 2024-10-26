const Payment = require('../models/payment.model');

const enterPayment = async (req, res) => {
    try {
        console.log("entered");
        const { CNR, paymentAmount } = req.body;

        if (!CNR || paymentAmount === undefined) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const payment = await Payment.findOne({ CNR });

        if (!payment) {
            return res.status(404).json({ message: "Document not found" });
        }

        if (paymentAmount <= 0) {
            return res.status(400).json({ message: "Invalid payment amount" });
        }

        if (paymentAmount > payment.Fine) {
            return res.status(400).json({ message: "Payment amount exceeds fine" });
        }

        payment.Fine -= paymentAmount;
        console.log("Remaining fine:", payment.Fine)
        res.status(200).json(await payment.save());
         
    } catch (err) {
        console.error("Error occurred while processing payment:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { enterPayment };