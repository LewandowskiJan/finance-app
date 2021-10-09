import { Router } from 'express';
import {
  addType,
  findTypeByName,
  getAllTypes,
  getTypeById,
  updateTypeById,
  deleteTypeById,
} from '../controllers/type.controller';

const router: Router = Router();

router.post('/add', addType);
router.get('/find', findTypeByName);
router.get('/all', getAllTypes);

router.get('/:id', getTypeById);
router.post('/:id', updateTypeById);
router.delete('/:id', deleteTypeById);

export const TypeRoute: Router = router;
