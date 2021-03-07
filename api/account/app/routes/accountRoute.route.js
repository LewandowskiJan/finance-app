const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account.controller');

router.get('/all', accountController.getAllAccounts);

router.post('/add', accountController.addAccount);

router.get('/:id', accountController.getAccountById);
router.post('/:id', accountController.updateAccountById);
router.delete('/:id', accountController.deleteAccountById);

module.exports = router;
