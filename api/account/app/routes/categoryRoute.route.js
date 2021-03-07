const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.get('/all', categoryController.getAllCategories);

router.post('/add', categoryController.addCategory);
router.get('/:id', categoryController.getCategoryById);
router.post('/:id', categoryController.updateCategoryById);
router.delete('/delete/:id', categoryController.deleteCategoryById);

module.exports = router;
