const express = require('express');
const router = express.Router();

const dataRoute = require('./routes/dataRoute.route');

router.use('/data', dataRoute);

module.exports = router;
