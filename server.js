const express = require("express");
const connectDB = require("./db");
require("dotenv").config();

const adminRoutes = require("./routes/adminRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const placeRoutes = require("./routes/placeRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

connectDB();

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/admin", adminRoutes);
app.use("/hotels", hotelRoutes);
app.use("/places", placeRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
