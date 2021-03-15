const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfer.controller');

router.get('/all', transferController.getAllTransfers);
router.post('/add', transferController.addTransfer);
router.get('/:id', transferController.getTransferById);

module.exports = router;
