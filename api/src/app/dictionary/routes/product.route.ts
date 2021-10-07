import { Router } from 'express';
import {
  addProduct,
  findProductByName,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from '../controllers/product.controller';

const router: Router = Router();

router.post('/add', addProduct);

router.get('/find', findProductByName);
router.get('/all', getAllProducts);

router.get('/:id', getProductById);
router.post('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export const ProductRoute: Router = router;
