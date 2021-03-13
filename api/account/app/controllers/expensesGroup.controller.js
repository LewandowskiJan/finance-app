const ExpensesGroupDao = require('../dao/expensesGroup.dao');

exports.addExpensesGroup = async (req, res) => {
  try {
    const result = await ExpensesGroupDao.addExpensesGroup(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getExpensesGroupById = async (req, res) => {
  try {
    const result = await ExpensesGroupDao.findExpensesGroupById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllExpensesGroups = async (req, res) => {
  try {
    const result = await ExpensesGroupDao.findExpensesGroups(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findExpensesGroupByName = async (req, res) => {
  try {
    const result = await ExpensesGroupDao.searchForExpensesGroup(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateExpensesGroupById = async (req, res) => {
  try {
    const result = await ExpensesGroupDao.updateExpensesGroupById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteExpensesGroupById = async (req, res) => {
  try {
    const result = await ExpensesGroupDao.deleteExpensesGroupById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
