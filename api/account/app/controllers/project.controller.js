const ProjectDao = require('../dao/project.dao');

exports.addProject = async (req, res, next) => {
  try {
    const result = await ProjectDao.addProject(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const result = await ProjectDao.findProjectById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllProjects = async (req, res, next) => {
  try {
    const result = await ProjectDao.findProjects(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findProjectByName = async (req, res, next) => {
  try {
    const result = await ProjectDao.searchForProject(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateProjectById = async (req, res, next) => {
  try {
    const result = await ProjectDao.updateProjectById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteProjectById = async (req, res, next) => {
  try {
    const result = await ProjectDao.deleteProjectById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
