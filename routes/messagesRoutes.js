const express = require('express');
const { createMessage, getMessages, deleteMessage } = require('../controllers/messagesController');
const router = express.Router();

// POST: Create a new message
router.post('/', createMessage);

// GET: Get all messages
router.get('/', getMessages);

// DELETE: Delete a message
router.delete('/:id', deleteMessage);

module.exports = router;
