const DataObjectAccess = require('../../shared/dataAccessObject');
const Product = require('../models/product');

exports.addProduct = async (options) => {
  return await DataObjectAccess.add(options, Product);
};

exports.findProducts = async (options) => {
  return await DataObjectAccess.find(options, Product);
};

exports.findProductById = async (options) => {
  return await DataObjectAccess.findById(options, Product);
};

exports.searchForProduct = async (options) => {
  return await DataObjectAccess.search(options, Product);
};

exports.updateProductById = async (options) => {
  return await DataObjectAccess.updateOne(options, Product);
};

exports.deleteProductById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, Product);
};
