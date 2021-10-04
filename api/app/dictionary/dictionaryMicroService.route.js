const express = require('express');
const router = express.Router();

const categoryRoute = require('./routes/category.route');
const eventRoute = require('./routes/event.route');
const expensesGroupRoute = require('./routes/expensesGroup.route');
const productRoute = require('./routes/product.route');
const projectRoute = require('./routes/project.route');
const targetRoute = require('./routes/target.route');
const typeRoute = require('./routes/type.route');

router.use('/category', categoryRoute);
router.use('/event', eventRoute);
router.use('/expensesgroup', expensesGroupRoute);
router.use('/product', productRoute);
router.use('/project', projectRoute);
router.use('/target', targetRoute);
router.use('/type', typeRoute);

module.exports = router;
