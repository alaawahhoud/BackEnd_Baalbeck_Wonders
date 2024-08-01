// models/Hotel.js
const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  touristArea: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TouristArea",
    required: true,
  },
});

HotelSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Hotel", HotelSchema);
