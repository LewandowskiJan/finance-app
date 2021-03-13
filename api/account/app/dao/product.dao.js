const DataObjectAccess = require('./shared/DataObjectAccess');
const Product = require('../models/product');

exports.addProduct = async (req) => {
  return await DataObjectAccess.add(req, Product);
};

exports.findProducts = async (req) => {
  return await DataObjectAccess.find(req, Product);
};

exports.findProductById = async (req) => {
  return await DataObjectAccess.findById(req, Product);
};

exports.searchForProduct = async (req) => {
  return await DataObjectAccess.search(req, Product);
};

exports.updateProductById = async (req) => {
  return await DataObjectAccess.updateOne(req, Product);
};

exports.deleteProductById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, Product);
};
