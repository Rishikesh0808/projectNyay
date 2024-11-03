const mongoose=require('mongoose')
const MessageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    content: String,
    timestamp: { type: Date, default: Date.now }
  },{collection:'messages'});
  const messages=mongoose.model('messages',MessageSchema);
  module.exports=messages