const express = require('express');
const router = express.Router();
const expensesGroupRoute = require('../controllers/expensesGroup.controller');

router.post('/add', expensesGroupRoute.addExpensesGroup);

router.get('/find', expensesGroupRoute.findExpensesGroupByName);
router.get('/all', expensesGroupRoute.getAllExpensesGroups);

router.get('/:id', expensesGroupRoute.getExpensesGroupById);
router.post('/:id', expensesGroupRoute.updateExpensesGroupById);
router.delete('/:id', expensesGroupRoute.deleteExpensesGroupById);

module.exports = router;
