const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db'); // Ensure this path is correct
const authRoutes = require('./routes/auth.route'); // Import auth routes
const paymentRoutes = require('./routes/payment.route'); // Import payment routes
const petRoutes=require('./routes/petiton.route');
const trackRoutes=require('./routes/cases.route');
const registerRoutes=require('./routes/register.route');
const cors = require('cors');
const jwtmiddleware=require('./middleware/jwtverification')
// Initialize environment variables
dotenv.config();

// Create an Express app
const app = express();

// Connect to the database
connectDB().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("Failed to connect to DB:", err);
    process.exit(1); // Exit process with failure if DB connection fails
});

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors());
app.use(jwtmiddleware);
// Routes
app.use('', authRoutes); // Use auth routes
app.use('', paymentRoutes); // Use payment routes
app.use('',petRoutes)
app.use('', trackRoutes)
app.use('',registerRoutes)

module.exports = app;
