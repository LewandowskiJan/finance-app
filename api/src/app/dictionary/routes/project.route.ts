import { Router } from 'express';
import {
  addProject,
  findProjectByName,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
} from '../controllers/project.controller';

const router: Router = Router();

router.post('/add', addProject);

router.get('/find', findProjectByName);
router.get('/all', getAllProjects);

router.get('/:id', getProjectById);
router.post('/:id', updateProjectById);
router.delete('/:id', deleteProjectById);

export const ProjectRoute: Router = router;
