const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/add', productController.addProduct);

router.get('/find', productController.findProductByName);
router.get('/all', productController.getAllProducts);

router.get('/:id', productController.getProductById);
router.post('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);

module.exports = router;
