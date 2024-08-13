// models/Restaurant.js
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  cuisine: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      //required: true,
    },
  },
  touristArea: { type: mongoose.Schema.Types.ObjectId, ref: 'TouristArea' },

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
  
 
  
  
  facilities: [String],
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

});

RestaurantSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Restaurant', RestaurantSchema);