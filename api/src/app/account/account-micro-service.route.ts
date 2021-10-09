import { Router } from 'express';
import { AccountRoute } from './routes/account.route';
import { BalanceHistoryRoute } from './routes/balance-history.route';
import { TransferRoute } from './routes/transfer.route';
import { TransferLineRoute } from './routes/transferLine.route';

const router: Router = Router();

router.use('/account', AccountRoute);
router.use('/transfer', TransferRoute);
router.use('/transferline', TransferLineRoute);
router.use('/balanceHistory', BalanceHistoryRoute);

export const AccountMicroServiceRoute: Router = router;
