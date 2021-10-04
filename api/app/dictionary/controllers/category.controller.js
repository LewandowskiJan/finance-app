const CategoryDao = require('../dao/category.dao');
const { requestParseToOptionObj: requestParseToObj } = require('../../shared/requestParser');

exports.addCategory = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await CategoryDao.addCategory(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getCategoryById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await CategoryDao.findCategoryById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllCategories = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await CategoryDao.findCategories(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findCategoryByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await CategoryDao.searchForCategory(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateCategoryById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await CategoryDao.updateCategoryById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteCategoryById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await CategoryDao.deleteCategoryById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
