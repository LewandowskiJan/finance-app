const express = require('express');
const router = express.Router();
const typeController = require('../controllers/type.controller');

router.post('/add', typeController.addType);

router.get('/find', typeController.findTypeByName);
router.get('/all', typeController.getAllTypes);

router.get('/:id', typeController.getTypeById);
router.post('/:id', typeController.updateTypeById);
router.delete('/:id', typeController.deleteTypeById);

module.exports = router;
