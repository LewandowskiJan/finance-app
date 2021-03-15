const express = require('express');
const router = express.Router();
const transferLineController = require('../controllers/transferLine.controller');

router.get('/all', transferLineController.getAllTransferLines);
router.get('/find', transferLineController.getAllTransferLinesByProperties);

module.exports = router;
