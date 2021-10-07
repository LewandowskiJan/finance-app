import { Router } from 'express';
import {
  addExpensesGroup,
  findExpensesGroupByName,
  getAllExpensesGroups,
  getExpensesGroupById,
  updateExpensesGroupById,
  deleteExpensesGroupById,
} from '../controllers/expenses-group.controller';

const router: Router = Router();

router.post('/add', addExpensesGroup);
router.get('/find', findExpensesGroupByName);
router.get('/all', getAllExpensesGroups);

router.get('/:id', getExpensesGroupById);
router.post('/:id', updateExpensesGroupById);
router.delete('/:id', deleteExpensesGroupById);

export const ExpensesGroupRoute: Router = router;
