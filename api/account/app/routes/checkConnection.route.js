const express = require('express');
const router = express.Router();
const checkConnectionController = require('../controllers/checkConnection.controller');

router.get('/checkConnection', checkConnectionController.checkConnection);

module.exports = router;
