const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const messageRoutes = require('./routes/messagesRoutes');

// Import routes
const hotelRoutes = require("./routes/hotelRoutes");
const placeRoutes = require("./routes/placeRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

// Routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/users", userRoutes); // Use user routes
app.use('/api/messages', messageRoutes);
// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
