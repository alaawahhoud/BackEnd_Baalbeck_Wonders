const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,  // This needs to be within the object
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
 location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      //required: true, // This is needed to avoid the previous validation error
    },
  },
  touristArea: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TouristArea",
    required: true,  // Assuming this is required, you can remove it if not
  },
  contact: {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  images: {
    type: [String],
  },
  priceRange: {
    minPrice: {
      type: Number,
    },
    maxPrice: {
      type: Number,
    },
  },
  facilities: [String],
  openingHours: {
    monday: {
      open: String,
      close: String,
    },
    tuesday: {
      open: String,
      close: String,
    },
    wednesday: {
      open: String,
      close: String,
    },
    thursday: {
      open: String,
      close: String,
    },
    friday: {
      open: String,
      close: String,
    },
    saturday: {
      open: String,
      close: String,
    },
    sunday: {
      open: String,
      close: String,
    },
  },

}, { timestamps: true });

HotelSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Hotel", HotelSchema);