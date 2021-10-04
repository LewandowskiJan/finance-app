const ProjectDao = require('../dao/project.dao');
const { requestParseToOptionObj: requestParseToObj } = require('../../shared/requestParser');

exports.addProject = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProjectDao.addProject(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getProjectById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProjectDao.findProjectById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllProjects = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProjectDao.findProjects(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findProjectByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProjectDao.searchForProject(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateProjectById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProjectDao.updateProjectById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteProjectById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProjectDao.deleteProjectById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
