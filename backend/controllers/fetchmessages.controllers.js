const Message = require('../models/messages.model');

const fetchMessages = async (req, res) => {
  try {
    // Retrieve all messages from the database, sorted by timestamp
    const messages = await Message.find({}).sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Error fetching messages" });
  }
};

module.exports = fetchMessages;
