const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.post('/add', eventController.addEvent);

router.get('/find', eventController.findEventByName);
router.get('/all', eventController.getAllEvents);

router.get('/:id', eventController.getEventById);
router.post('/:id', eventController.updateEventById);
router.delete('/:id', eventController.deleteEventById);

module.exports = router;
