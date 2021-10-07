import { Router } from 'express';
import {
  addCategory,
  getAllCategories,
  findCategoryByName,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} from '../controllers/category.controller';

const router: Router = Router();

router.post('/add', addCategory);
router.get('/all', getAllCategories);
router.get('/find', findCategoryByName);

router.get('/:id', getCategoryById);
router.post('/:id', updateCategoryById);
router.delete('/:id', deleteCategoryById);

export const CategoryRoute: Router = router;
