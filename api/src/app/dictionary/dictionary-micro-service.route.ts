import { Router } from 'express';
import { CategoryRoute } from './routes/category.route';
import { EventRoute } from './routes/event.route';
import { ExpensesGroupRoute } from './routes/expenses-group.route';
import { ProductRoute } from './routes/product.route';
import { ProjectRoute } from './routes/project.route';
import { TargetRoute } from './routes/target.route';
import { TypeRoute } from './routes/type.route';

const router: Router = Router();

router.use('/category', CategoryRoute);
router.use('/event', EventRoute);
router.use('/expensesgroup', ExpensesGroupRoute);
router.use('/product', ProductRoute);
router.use('/project', ProjectRoute);
router.use('/target', TargetRoute);
router.use('/type', TypeRoute);

export const DictionaryMicroServiceRoute: Router = router;
