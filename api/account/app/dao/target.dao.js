const DataObjectAccess = require('./shared/DataObjectAccess');
const Target = require('../models/category');

exports.addTarget = async (req) => {
  return await DataObjectAccess.add(req, Target);
};

exports.findTargets = async (req) => {
  return await DataObjectAccess.find(req, Target);
};

exports.findTargetById = async (req) => {
  return await DataObjectAccess.findById(req, Target);
};

exports.searchForTarget = async (req) => {
  return await DataObjectAccess.search(req, Target);
};

exports.updateTargetById = async (req) => {
  return await DataObjectAccess.updateOne(req, Target);
};

exports.deleteTargetById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, Target);
};
