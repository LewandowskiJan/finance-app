import { Router } from 'express';
import { checkConnection } from './check-connection.controller';

const router: Router = Router();

router.get('/', checkConnection);

export const CheckConnectionRoute: Router = router;
