
const express = require('express');
const connectDB = require('./dbConfig');
const userRoutes = require('./userRoutes');
const bodyParser = require('body-parser');

const app = express();

// Connect to the database
connectDB();

// Middleware for parsing JSON
app.use(bodyParser.json());

// Define user routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
