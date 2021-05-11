const DataObjectAccess = require('./shared/dataAccessObject');
const Category = require('../models/category');

exports.addCategory = async (options) => {
  if (!options.body.utfIcon) {
    options.body.utfIcon = '&#128176;';
  }
  return await DataObjectAccess.add(options, Category);
};

exports.findCategories = async (options) => {
  return await DataObjectAccess.find(options, Category);
};

exports.findCategoryById = async (options) => {
  return await DataObjectAccess.findById(options, Category);
};

exports.searchForCategory = async (options) => {
  return await DataObjectAccess.search(options, Category);
};

exports.updateCategoryById = async (options) => {
  return await DataObjectAccess.updateOne(options, Category);
};

exports.deleteCategoryById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, Category);
};
