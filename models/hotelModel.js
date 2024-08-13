const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },
  rating: { type: Number, min: 0, max: 5, required: true },
});

hotelSchema.index({ location: '2dsphere' }); // Geospatial index for location

module.exports = mongoose.model('Hotel', hotelSchema);
