const DataObjectAccess = require('./shared/dataAccessObject');
const ExpensesGroup = require('../models/expensesGroup');

exports.addExpensesGroup = async (options) => {
  return await DataObjectAccess.add(options, ExpensesGroup);
};

exports.findExpensesGroups = async (options) => {
  return await DataObjectAccess.find(options, ExpensesGroup);
};

exports.findExpensesGroupById = async (options) => {
  return await DataObjectAccess.findById(options, ExpensesGroup);
};

exports.searchForExpensesGroup = async (options) => {
  return await DataObjectAccess.search(options, ExpensesGroup);
};

exports.updateExpensesGroupById = async (options) => {
  return await DataObjectAccess.updateOne(options, ExpensesGroup);
};

exports.deleteExpensesGroupById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, ExpensesGroup);
};
