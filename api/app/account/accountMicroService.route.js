const express = require('express');
const router = express.Router();

const checkConnectionRoute = require('./routes/checkConnection.route');
const accountRoute = require('./routes/account.route');
const transferRoute = require('./routes/transfer.route');
const transferLineRoute = require('./routes/transferLine.route');
const balanceHistoryRoute = require('./routes/balanceHistory.route');

router.use('/checkConnection', checkConnectionRoute);
router.use('/account', accountRoute);
router.use('/transfer', transferRoute);
router.use('/transferline', transferLineRoute);
router.use('/balanceHistory', balanceHistoryRoute);

module.exports = router;
