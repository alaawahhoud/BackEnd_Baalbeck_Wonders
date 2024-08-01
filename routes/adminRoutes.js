const express =require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// POST register a new admin
router.post('/register', adminController.registerAdmin);

// POST login admin
router.post('/login', adminController.loginAdmin);

module.exports = router;
