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

// Initialize environment variables
dotenv.config();

// Create an Express app
const app = express();

// Connect to the database
connectDB()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.error("Failed to connect to DB:", err);
        process.exit(1);
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
