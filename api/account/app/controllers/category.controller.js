const CategoryDao = require('../dao/category.dao');

exports.addCategory = async (req, res, next) => {
  try {
    const result = await CategoryDao.addCategory(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const result = await CategoryDao.findCategoryById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllCategories = async (req, res, next) => {
  try {
    const result = await CategoryDao.findCategories(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findCategoryByName = async (req, res, next) => {
  try {
    const result = await CategoryDao.searchForCategory(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateCategoryById = async (req, res, next) => {
  try {
    const result = await CategoryDao.updateCategoryById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteCategoryById = async (req, res, next) => {
  try {
    const result = await CategoryDao.deleteCategoryById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
