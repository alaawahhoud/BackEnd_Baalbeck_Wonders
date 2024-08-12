// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Create a new restaurant
router.post('/create', restaurantController.createRestaurant);

// Get all restaurants
router.get('/get', restaurantController.getAllRestaurants);

// Get a restaurant by ID
router.get('/:id', restaurantController.getRestaurantById);

// Update a restaurant by ID
router.put('/update/:id', restaurantController.updateRestaurantById);

// Delete a restaurant by ID
router.delete('/delete/:id', restaurantController.deleteRestaurantById);

module.exports = router;
