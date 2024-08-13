// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Create a new restaurant
router.post('/', restaurantController.createRestaurant);

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Get a restaurant by ID
router.get('/:id', restaurantController.getRestaurantById);

// Update a restaurant by ID
router.put('/:id', restaurantController.updateRestaurantById);

// Delete a restaurant by ID
router.delete('/:id', restaurantController.deleteRestaurantById);

module.exports = router;
