import { Router } from 'express';
import {
  addAccount,
  getAllAccounts,
  getAllAccountsWithBalanceHistory,
  resetAllAccountsBalance,
  findAccountByName,
  getAccountById,
  updateAccountById,
  deleteAccountById,
} from '../controllers/account.controller';

const router: Router = Router();

router.post('/add', addAccount);
router.post('/all', getAllAccounts);
router.get('/allWithBalanceHistory', getAllAccountsWithBalanceHistory);
router.get('/resetBalances', resetAllAccountsBalance);
router.get('/find', findAccountByName);
router.get('/:id', getAccountById);
router.post('/:id', updateAccountById);
router.delete('/:id', deleteAccountById);

export const AccountRoute: Router = router;
