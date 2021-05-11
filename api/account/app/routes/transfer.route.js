const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfer.controller');

router.post('/all', transferController.getAllTransfers);
router.post('/add', transferController.addTransfer);
router.post('/addMany', transferController.addTransfers);
router.get('/:id', transferController.getTransferById);

module.exports = router;
