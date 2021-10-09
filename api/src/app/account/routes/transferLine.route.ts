import { Router } from 'express';
import { getAllTransferLines, getAllTransferLinesByProperties } from '../controllers/transfer-line.controller';

const router: Router = Router();

router.get('/all', getAllTransferLines);
router.get('/find', getAllTransferLinesByProperties);

export const TransferLineRoute: Router = router;
