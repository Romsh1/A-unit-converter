const express = require('express');
const { convertController } = require('../controllers/convertController');

const router = express.Router();
router.post('/convert', convertController);

module.exports = router;