const ExpensesGroupDao = require('../dao/expensesGroup.dao');
const {requestParseToOptionObj: requestParseToObj} = require('./shared/requestParser');

exports.addExpensesGroup = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ExpensesGroupDao.addExpensesGroup(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getExpensesGroupById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ExpensesGroupDao.findExpensesGroupById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllExpensesGroups = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ExpensesGroupDao.findExpensesGroups(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findExpensesGroupByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ExpensesGroupDao.searchForExpensesGroup(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateExpensesGroupById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ExpensesGroupDao.updateExpensesGroupById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteExpensesGroupById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await ExpensesGroupDao.deleteExpensesGroupById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
