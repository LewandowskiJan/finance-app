const express = require('express');
const router = express.Router();
const targetController = require('../controllers/target.controller');

router.post('/add', targetController.addTarget);

router.get('/find', targetController.findTargetByName);
router.get('/all', targetController.getAllTargets);

router.get('/:id', targetController.getTargetById);
router.post('/:id', targetController.updateTargetById);
router.delete('/:id', targetController.deleteTargetById);

module.exports = router;
