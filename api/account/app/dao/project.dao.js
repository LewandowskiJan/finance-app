const DataObjectAccess = require('./shared/dataAccessObject');
const Project = require('../models/project');

exports.addProject = async (options) => {
  return await DataObjectAccess.add(options, Project);
};

exports.findProjects = async (options) => {
  return await DataObjectAccess.find(options, Project);
};

exports.findProjectById = async (options) => {
  return await DataObjectAccess.findById(options, Project);
};

exports.searchForProject = async (options) => {
  return await DataObjectAccess.search(options, Project);
};

exports.updateProjectById = async (options) => {
  return await DataObjectAccess.updateOne(options, Project);
};

exports.deleteProjectById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, Project);
};
