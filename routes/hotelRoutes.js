const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// POST create a new hotel
router.post('/', hotelController.createHotel);

// GET all hotels
router.get('/', hotelController.getAllHotels);

// GET hotel by ID
router.get('/:id', hotelController.getHotelById);

// PUT update hotel by ID
router.put('/:id', hotelController.updateHotelById);

// DELETE hotel by ID
router.delete('/:id', hotelController.deleteHotelById);

module.exports = router;
