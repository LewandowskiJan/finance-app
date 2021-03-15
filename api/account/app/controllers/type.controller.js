const TypeDao = require('../dao/type.dao');

exports.addType = async (req, res, next) => {
  try {
    const result = await TypeDao.addType(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getTypeById = async (req, res, next) => {
  try {
    const result = await TypeDao.findTypeById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllTypes = async (req, res, next) => {
  try {
    const result = await TypeDao.findTypes(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findTypeByName = async (req, res, next) => {
  try {
    const result = await TypeDao.searchForType(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateTypeById = async (req, res, next) => {
  try {
    const result = await TypeDao.updateTypeById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteTypeById = async (req, res, next) => {
  try {
    const result = await TypeDao.deleteTypeById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
