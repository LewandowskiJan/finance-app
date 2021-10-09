import { Router } from 'express';
import {
  addEvent,
  findEventByName,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById,
} from '../controllers/event.controller';

const router: Router = Router();

router.post('/add', addEvent);
router.get('/find', findEventByName);
router.get('/all', getAllEvents);
router.get('/:id', getEventById);
router.post('/:id', updateEventById);
router.delete('/:id', deleteEventById);

export const EventRoute: Router = router;
