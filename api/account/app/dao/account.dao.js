const DataObjectAccess = require('./shared/dataAccessObject');
const Account = require('../models/account');

exports.updateAccountBalance = async (accountId, transferValue, transfer) => {
  const account = await Account.findById(accountId);

  if (!account.isExternal && transferValue < 0 && account.balance < -transferValue) {
    return null;
  }

  let balance;

  if (transfer.currency !== account.currency) {
    const value =
      transfer.currency === 'PLN' ?
        parseFloat(parseFloat(transferValue) / parseFloat(transfer.exchangeRate)).toFixed(4) :
        parseFloat(parseFloat(transferValue) * parseFloat(transfer.exchangeRate)).toFixed(4);

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
      },
  );

  const response = { ...account._doc, balance: balance };
  return response;
};

exports.updateAccount = async (req) => {
  // change balance only using transfer
  delete req.body.balance;
  return await DataObjectAccess.updateOne(req, Account);
};

exports.getAllAccounts = async (options = {}) => {
  return await DataObjectAccess.find(options, Account);
};

exports.getAccountByOneProperty = async (options = {}) => {
  return await DataObjectAccess.findByOneProperty(options, Account);
};

exports.createAccount = async (options) => {
  const newAccount = new Account({ ...options.body });
  const savedAccount = await newAccount.save();

  return { ...savedAccount._doc };
};

exports.findAccountById = async (options) => {
  return await DataObjectAccess.findById(options, Account);
};

exports.deleteAccountById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, Account);
};

exports.searchForAccount = async (options) => {
  return await DataObjectAccess.search(options, Account);
};

exports.resterAllAccountsBalance = async () => {
  return await Account.updateMany({}, { balance: '0', isExternal: true });
};
