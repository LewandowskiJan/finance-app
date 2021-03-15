const DataObjectAccess = require('./shared/DataObjectAccess');
const ExpensesGroup = require('../models/expensesGroup');

exports.addExpensesGroup = async (req) => {
  return await DataObjectAccess.add(req, ExpensesGroup);
};

exports.findExpensesGroups = async (req) => {
  return await DataObjectAccess.find(req, ExpensesGroup);
};

exports.findExpensesGroupById = async (req) => {
  return await DataObjectAccess.findById(req, ExpensesGroup);
};

exports.searchForExpensesGroup = async (req) => {
  return await DataObjectAccess.search(req, ExpensesGroup);
};

exports.updateExpensesGroupById = async (req) => {
  return await DataObjectAccess.updateOne(req, ExpensesGroup);
};

exports.deleteExpensesGroupById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, ExpensesGroup);
};
