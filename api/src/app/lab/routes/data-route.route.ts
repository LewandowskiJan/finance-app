import { Router } from 'express';
import { getData } from '../controllers/data.controller';

const router: Router = Router();
router.get('/', getData);

export const GetDataRoute: Router = router;
