const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const  messages =require('./models/messages.model')

const app = require('./app')
const PORT = process.env.PORT || 5000; // Use the specified PORT or 3005

// Create an HTTP server and attach the Express app
const server = http.createServer(app);

// Initialize Socket.IO with universal CORS enabled
const io = new Server(server);



// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for "sendMessage" event and broadcast the message
  socket.on('sendMessage', (messageData) => {
    console.log('Message received:', messageData);
     const newmessage= new messages(messageData);
     newmessage.save()
    io.emit('receiveMessage', messageData); // Broadcast to all clients
  });

  // Log when a user disconnects
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
