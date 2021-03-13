const DataObjectAccess = require('./shared/DataObjectAccess');
const Project = require('../models/project');

exports.addProject = async (req) => {
  return await DataObjectAccess.add(req, Project);
};

exports.findProjects = async (req) => {
  return await DataObjectAccess.find(req, Project);
};

exports.findProjectById = async (req) => {
  return await DataObjectAccess.findById(req, Project);
};

exports.searchForProject = async (req) => {
  return await DataObjectAccess.search(req, Project);
};

exports.updateProjectById = async (req) => {
  return await DataObjectAccess.updateOne(req, Project);
};

exports.deleteProjectById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, Project);
};
