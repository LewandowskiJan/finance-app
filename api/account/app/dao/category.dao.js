const DataObjectAccess = require('./shared/DataObjectAccess');
const Category = require('../models/category');

exports.addCategory = async (req) => {
  if (!req.body.utfIcon) {
    req.body.utfIcon = '&#128176;';
  }
  return await DataObjectAccess.add(req, Category);
};

exports.findCategories = async (req) => {
  return await DataObjectAccess.find(req, Category);
};

exports.findCategoryById = async (req) => {
  return await DataObjectAccess.findById(req, Category);
};

exports.searchForCategory = async (req) => {
  return await DataObjectAccess.search(req, Category);
};

exports.updateCategoryById = async (req) => {
  return await DataObjectAccess.updateOne(req, Category);
};

exports.deleteCategoryById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, Category);
};
