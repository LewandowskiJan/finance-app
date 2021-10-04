const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

router.post('/add', projectController.addProject);

router.get('/find', projectController.findProjectByName);
router.get('/all', projectController.getAllProjects);

router.get('/:id', projectController.getProjectById);
router.post('/:id', projectController.updateProjectById);
router.delete('/:id', projectController.deleteProjectById);

module.exports = router;
