const DataObjectAccess = require('./shared/dataAccessObject');
const Target = require('../models/target');

exports.addTarget = async (options) => {
  return await DataObjectAccess.add(options, Target);
};

exports.findTargets = async (options) => {
  return await DataObjectAccess.find(options, Target);
};

exports.findTargetById = async (options) => {
  return await DataObjectAccess.findById(options, Target);
};

exports.searchForTarget = async (options) => {
  return await DataObjectAccess.search(options, Target);
};

exports.updateTargetById = async (options) => {
  return await DataObjectAccess.updateOne(options, Target);
};

exports.deleteTargetById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, Target);
};
