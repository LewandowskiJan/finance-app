import { Router } from 'express';
import { getAllTransfers, addTransfer, addTransfers, getTransferById } from '../controllers/transfer.controller';

const router: Router = Router();

router.post('/all', getAllTransfers);
router.post('/add', addTransfer);
router.post('/addMany', addTransfers);
router.get('/:id', getTransferById);

export const TransferRoute: Router = router;
