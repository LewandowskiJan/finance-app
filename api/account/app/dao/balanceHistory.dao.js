const DataObjectAccess = require('./shared/DataObjectAccess');
const BalanceHistory = require('../models/balanceHistory');

exports.addBalanceHistory = async (req) => {
  return await DataObjectAccess.add(req, BalanceHistory);
};

exports.findCategories = async (req) => {
  return await DataObjectAccess.find(req, BalanceHistory);
};

exports.findBalanceHistoryById = async (req) => {
  return await DataObjectAccess.findById(req, BalanceHistory);
};

exports.searchForBalanceHistory = async (req) => {
  return await DataObjectAccess.search(req, BalanceHistory);
};

exports.updateBalanceHistoryById = async (req) => {
  return await DataObjectAccess.updateOne(req, BalanceHistory);
};

exports.deleteBalanceHistoryById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, BalanceHistory);
};
