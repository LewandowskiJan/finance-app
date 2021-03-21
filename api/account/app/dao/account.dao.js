const DataObjectAccess = require('./shared/DataObjectAccess');
const Account = require('../models/account');
const BalanceHistory = require('../models/balanceHistory');

exports.updateAccountBalance = async (accountId, transferValue) => {
  const account = await Account.findOne({ _id: accountId });

  if (!account.isExternal && transferValue < 0 && account.balance < -transferValue) {
    return null;
  }
  const balance = (parseFloat(account.balance) + parseFloat(transferValue)).toFixed(4).toString();

  await Account.updateOne(
    { _id: accountId },
    { $set: { balance: balance } },
    {
      new: true,
      runValidators: true,
      context: 'query',
    }
  );

  const response = { ...account._doc, balance: balance };
  return response;
};

exports.updateAccount = async (req) => {
  // change balance only using transfer
  delete req.body.balance;
  return await DataObjectAccess.updateOne(req, Account);
};

exports.getAllAccounts = async (req = {}) => {
  return await DataObjectAccess.find(req, Account);
};

exports.getAccountByOneProperty = async (req = {}) => {
  return await DataObjectAccess.findByOneProperty(req, Account);
};

exports.createAccount = async (req) => {
  const newAccount = new Account({ ...req.body });
  const savedAccount = await newAccount.save();

  return { ...savedAccount._doc };
};

exports.findAccountById = async (req) => {
  return await DataObjectAccess.findById(req, Account);
};

exports.deleteAccountById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, Account);
};
