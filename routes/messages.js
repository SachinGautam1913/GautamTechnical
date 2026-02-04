const express = require('express');
const { createMessage } = require('../controllers/messageController');

const router = express.Router();

// POST /api/messages
router.post('/', createMessage);

module.exports = router;