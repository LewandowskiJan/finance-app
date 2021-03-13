const ProductDao = require('../dao/product.dao');

exports.addProduct = async (req, res) => {
  try {
    const result = await ProductDao.addProduct(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const result = await ProductDao.findProductById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const result = await ProductDao.findProducts(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findProductByName = async (req, res) => {
  try {
    const result = await ProductDao.searchForProduct(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const result = await ProductDao.updateProductById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const result = await ProductDao.deleteProductById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
