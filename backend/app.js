const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const authRoutes = require('./routes/auth.route');
const paymentRoutes = require('./routes/payment.route');
const petRoutes = require('./routes/petiton.route');
const trackRoutes = require('./routes/cases.route');
const registerRoutes = require('./routes/register.route');
const lawyerroutes = require('./routes/getlawyers.route');
const policeroutes = require('./routes/getPetitions.route.js');
const notingRoutes = require('./routes/noting.route.js');
const retrieveRoutes = require('./routes/retrieve.route');
const addpoliceRoutes = require('./routes/addpolice.route');
const addcasesRoutes = require('./routes/addcase.route.js');
const checkRoutes = require('./routes/check.route.js');
const addLawyersRoutes=require('./routes/addLawyers.route.js')
const messageRoutes = require('./routes/messages.route.js');
const cors = require('cors');
const jwtmiddleware = require('./middleware/jwtverification');
const path = require('path');
// Initialize environment variables
dotenv.config();

// Create an Express app
const app = express();


// API routes (add your Node.js API routes here)
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

// If no API routes are matched, serve the React app

// Connect to the database

app.use(express.static(path.join(__dirname, '../reactproj/build/static')));

// Serve the React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../reactproj/build', 'index.html'));
});


// Middleware
app.use(cors()); // Use CORS before the routes
app.use(express.json()); // For parsing application/json


// Routes
app.use('', authRoutes);
app.use('', paymentRoutes);
app.use('', petRoutes);
app.use('', trackRoutes);
app.use('', registerRoutes);
app.use('', lawyerroutes);
app.use('', policeroutes);
app.use('', notingRoutes);
app.use('', retrieveRoutes);
app.use('', addpoliceRoutes);
app.use('', addcasesRoutes);
app.use('', messageRoutes);
app.use('',checkRoutes);
app.use('',addLawyersRoutes);
module.exports = app;
