const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();

const app = express();


// Enable CORS for all routes
app.use(cors());

// Optionally, you can configure CORS to only allow specific origins:
// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with your frontend's URL
//   credentials: true, // Enable CORS to include credentials like cookies
// }));
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
