const express = require('express');
const router = express.Router();
const balanceHistoryController = require('../controllers/balanceHistory.controller');

router.get('/generateBalanceHistory', balanceHistoryController.generateBalanceHistoryByAccountId);

module.exports = router;
