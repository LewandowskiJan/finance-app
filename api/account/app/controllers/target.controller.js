const TargetDao = require('../dao/target.dao');
const {requestParseToOptionObj: requestParseToObj} = require('./shared/requestParser');

exports.addTarget = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TargetDao.addTarget(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getTargetById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TargetDao.findTargetById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllTargets = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TargetDao.findTargets(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findTargetByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TargetDao.searchForTarget(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateTargetById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TargetDao.updateTargetById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteTargetById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TargetDao.deleteTargetById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
