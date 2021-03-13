const ProjectDao = require('../dao/project.dao');

exports.addProject = async (req, res) => {
  try {
    const result = await ProjectDao.addProject(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const result = await ProjectDao.findProjectById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const result = await ProjectDao.findProjects(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findProjectByName = async (req, res) => {
  try {
    const result = await ProjectDao.searchForProject(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProjectById = async (req, res) => {
  try {
    const result = await ProjectDao.updateProjectById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProjectById = async (req, res) => {
  try {
    const result = await ProjectDao.deleteProjectById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
