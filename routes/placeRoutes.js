const express = require('express');
const router = express.Router();
const placeController  = require('../controllers/placeController');

// GET all tourist spots
router.post('/', placeController.createPlace);

// Get all places
router.get('/', placeController.getPlaces);

// Get a place by ID
router.get('/:id', placeController.getPlaceById);

// Update a place by ID
router.put('/:id', placeController.updatePlaceById);

// Delete a place by ID
router.delete('/:id', placeController.deletePlaceById);

module.exports = router;

