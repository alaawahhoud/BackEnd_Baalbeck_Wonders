// placeModel.js
const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Cultures', 'Restaurants', 'Hotels', 'Playground and Green Places', 'Castles'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        city: {
            type: String,
            required: true
        },
        region: String,
        country: {
            type: String,
            default: 'Lebanon'
        }
    },
    description: String,
    website: String,
    contact: {
        phone: String,
        email: String
    },
    coordinates: {
        latitude: Number,
        longitude: Number
    },
    opening_hours: {
        open: String,
        close: String
    },
    facilities: [String],
    rating: Number,
    reviews: [{
        user: String,
        rating: Number,
        comment: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    photos: [String],
    tags: [String],
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