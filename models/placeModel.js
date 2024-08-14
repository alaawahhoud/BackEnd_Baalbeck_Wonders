// placeModel.js
const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Cultures', 'Playground and Green Places', 'Castles'],
        
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number], 
            required: true
        }
    },
    country: {
        type: String,
        default: 'Lebanon'
    },
    description: String,
    website: String,
    phone: String,
    email: String,
    opening_hours: {
        open: String,
        close: String
    },
    facilities: [String],
    rating: Number,
    photos: [String],
    price_range: {
        min: Number,
        max: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('placemodel', placeSchema);