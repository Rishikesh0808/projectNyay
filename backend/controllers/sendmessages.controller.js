// In your messages controller
const sendMessage = async (req, res) => {
    const { sender, receiver, content } = req.body;
  
    const newMessage = new Message({
      sender,
      receiver,
      content,
    });
  
    try {
      await newMessage.save();
      res.status(201).json(newMessage); // Respond with the saved message
    } catch (error) {
      res.status(500).json({ message: "Error saving message" });
    }
  };
  module.exports=sendMessage;