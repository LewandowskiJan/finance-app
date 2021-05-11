const DataObjectAccess = require('./shared/dataAccessObject');
const Type = require('../models/type');

exports.addType = async (options) => {
  return await DataObjectAccess.add(options, Type);
};

exports.findTypes = async (options) => {
  return await DataObjectAccess.find(options, Type);
};

exports.findTypeById = async (options) => {
  return await DataObjectAccess.findById(options, Type);
};

exports.searchForType = async (options) => {
  return await DataObjectAccess.search(options, Type);
};

exports.updateTypeById = async (options) => {
  return await DataObjectAccess.updateOne(options, Type);
};

exports.deleteTypeById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, Type);
};
