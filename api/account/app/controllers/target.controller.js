const TargetDao = require('../dao/target.dao');

exports.addTarget = async (req, res, next) => {
  try {
    const result = await TargetDao.addTarget(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getTargetById = async (req, res, next) => {
  try {
    const result = await TargetDao.findTargetById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllTargets = async (req, res, next) => {
  try {
    const result = await TargetDao.findTargets(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findTargetByName = async (req, res, next) => {
  try {
    const result = await TargetDao.searchForTarget(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateTargetById = async (req, res, next) => {
  try {
    const result = await TargetDao.updateTargetById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteTargetById = async (req, res, next) => {
  try {
    const result = await TargetDao.deleteTargetById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
