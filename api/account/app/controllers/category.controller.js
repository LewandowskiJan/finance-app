const CategoryDao = require('../dao/category.dao');

exports.addCategory = async (req, res) => {
  try {
    const result = await CategoryDao.addCategory(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const result = await CategoryDao.findCategoryById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const result = await CategoryDao.findCategories(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findCategoryByName = async (req, res) => {
  try {
    const result = await CategoryDao.searchForCategory(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateCategoryById = async (req, res) => {
  try {
    const result = await CategoryDao.updateCategoryById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteCategoryById = async (req, res) => {
  try {
    const result = await CategoryDao.deleteCategoryById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
