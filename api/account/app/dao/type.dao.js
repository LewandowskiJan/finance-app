const DataObjectAccess = require('./shared/DataObjectAccess');
const Type = require('../models/type');

exports.addType = async (req) => {
  return await DataObjectAccess.add(req, Type);
};

exports.findTypes = async (req) => {
  return await DataObjectAccess.find(req, Type);
};

exports.findTypeById = async (req) => {
  return await DataObjectAccess.findById(req, Type);
};

exports.searchForType = async (req) => {
  return await DataObjectAccess.search(req, Type);
};

exports.updateTypeById = async (req) => {
  return await DataObjectAccess.updateOne(req, Type);
};

exports.deleteTypeById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, Type);
};
