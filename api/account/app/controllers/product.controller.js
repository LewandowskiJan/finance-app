const ProductDao = require('../dao/product.dao');

exports.addProduct = async (req, res, next) => {
  try {
    const result = await ProductDao.addProduct(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const result = await ProductDao.findProductById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const result = await ProductDao.findProducts(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findProductByName = async (req, res, next) => {
  try {
    const result = await ProductDao.searchForProduct(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateProductById = async (req, res, next) => {
  try {
    const result = await ProductDao.updateProductById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteProductById = async (req, res, next) => {
  try {
    const result = await ProductDao.deleteProductById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
