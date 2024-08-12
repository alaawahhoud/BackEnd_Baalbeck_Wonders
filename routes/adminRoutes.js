const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../Middlewares/auth');

// POST register a new admin (Accessible by everyone)
router.post('/register', adminController.registerAdmin);

// POST login admin (Accessible by everyone)
router.post('/login', adminController.loginAdmin);

// GET route to test login status (Accessible by logged-in users)
//router.get('/test', auth.isAdmin, (req, res) => res.json("Login successful"));

// PUT update admin details (Accessible only by the logged-in admin)
router.put('/update/:id', auth.isAdmin, adminController.updateAdmin);

// DELETE an admin (Accessible only by the logged-in admin)
router.delete('/delete/:id', auth.isAdmin, adminController.deleteAdmin);

module.exports = router;
