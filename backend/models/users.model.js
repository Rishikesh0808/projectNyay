const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:String
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);
module.exports = User;
