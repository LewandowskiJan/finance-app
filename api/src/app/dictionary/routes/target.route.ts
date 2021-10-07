import { Router } from 'express';
import {
  addTarget,
  findTargetByName,
  getAllTargets,
  getTargetById,
  updateTargetById,
  deleteTargetById,
} from '../controllers/target.controller';

const router: Router = Router();

router.post('/add', addTarget);
router.get('/find', findTargetByName);
router.get('/all', getAllTargets);

router.get('/:id', getTargetById);
router.post('/:id', updateTargetById);
router.delete('/:id', deleteTargetById);

export const TargetRoute: Router = router;
