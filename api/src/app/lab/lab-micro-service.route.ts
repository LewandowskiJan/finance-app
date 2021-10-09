import { Router } from 'express';
import { GetDataRoute } from './routes/data-route.route';

const router: Router = Router();
router.use('/data', GetDataRoute);

export const LabMicroServiceRoute: Router = router;
