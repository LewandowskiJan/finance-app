const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.post('/add', categoryController.addCategory);

router.get('/find', categoryController.findCategoryByName);
router.get('/all', categoryController.getAllCategories);

router.get('/:id', categoryController.getCategoryById);
router.post('/:id', categoryController.updateCategoryById);
router.delete('/:id', categoryController.deleteCategoryById);

module.exports = router;
