import { Router } from 'express';
import { generateBalanceHistoryByAccountId } from '../controllers/balance-history.controller';

const router: Router = Router();

router.get('/generateBalanceHistory', generateBalanceHistoryByAccountId);

export const BalanceHistoryRoute: Router = router;
