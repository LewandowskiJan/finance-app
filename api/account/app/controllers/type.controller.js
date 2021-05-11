const TypeDao = require('../dao/type.dao');
const {requestParseToOptionObj: requestParseToObj} = require('./shared/requestParser');

exports.addType = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TypeDao.addType(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getTypeById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TypeDao.findTypeById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllTypes = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TypeDao.findTypes(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findTypeByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TypeDao.searchForType(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateTypeById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TypeDao.updateTypeById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteTypeById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TypeDao.deleteTypeById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
