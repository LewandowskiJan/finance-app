const DataObjectAccess = require('./shared/DataObjectAccess');
const Account = require('../models/account');

exports.updateAccountBalance = async (accountId, transferValue, transfer) => {
  const account = await Account.findById(accountId);

  if (!account.isExternal && transferValue < 0 && account.balance < -transferValue) {
    return null;
  }

  let balance;

  if (transfer.currency !== account.currency) {
    const value =
      transfer.currency === 'PLN'
        ? parseFloat(parseFloat(transferValue) / parseFloat(transfer.exchangeRate)).toFixed(4)
        : parseFloat(parseFloat(transferValue) * parseFloat(transfer.exchangeRate)).toFixed(4);

    balance = (parseFloat(account.balance) + parseFloat(value)).toFixed(4).toString();
  } else {
    balance = (parseFloat(account.balance) + parseFloat(transferValue)).toFixed(4).toString();
  }

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

exports.searchForAccount = async (req) => {
  return await DataObjectAccess.search(req, Account);
};

exports.resterAllAccountsBalance = async () => {
  return await Account.updateMany({}, { balance: '0', isExternal: true });
};
