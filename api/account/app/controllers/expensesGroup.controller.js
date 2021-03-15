const ExpensesGroupDao = require('../dao/expensesGroup.dao');

exports.addExpensesGroup = async (req, res, next) => {
  try {
    const result = await ExpensesGroupDao.addExpensesGroup(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getExpensesGroupById = async (req, res, next) => {
  try {
    const result = await ExpensesGroupDao.findExpensesGroupById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllExpensesGroups = async (req, res, next) => {
  try {
    const result = await ExpensesGroupDao.findExpensesGroups(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findExpensesGroupByName = async (req, res, next) => {
  try {
    const result = await ExpensesGroupDao.searchForExpensesGroup(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateExpensesGroupById = async (req, res, next) => {
  try {
    const result = await ExpensesGroupDao.updateExpensesGroupById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteExpensesGroupById = async (req, res, next) => {
  try {
    const result = await ExpensesGroupDao.deleteExpensesGroupById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
