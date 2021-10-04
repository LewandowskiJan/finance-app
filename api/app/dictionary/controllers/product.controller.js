const ProductDao = require('../dao/product.dao');
const { requestParseToOptionObj: requestParseToObj } = require('../../shared/requestParser');

exports.addProduct = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProductDao.addProduct(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProductDao.findProductById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProductDao.findProducts(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findProductByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProductDao.searchForProduct(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateProductById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProductDao.updateProductById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteProductById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ProductDao.deleteProductById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
