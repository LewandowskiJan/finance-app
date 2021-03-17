const AccountDao = require('../dao/account.dao');
const BalanceHistoryDao = require('../dao/balanceHistory.dao');

exports.getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await AccountDao.getAllAccounts();
    res.json(accounts);
  } catch (error) {
    return next(error);
  }
};

exports.getAllAccountsWithBalanceHistory = async (req, res, next) => {
  try {
    const accounts = await AccountDao.getAllAccounts();
    const historyBalances = await BalanceHistoryDao.findBalanceHistories();

    const result = accounts.map((account) => {
      return {
        ...account._doc,
        balanceHistory: historyBalances.filter((hb) => hb.accountId === account._id.toString()),
      };
    });
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.addAccount = async (req, res, next) => {
  try {
    const createdAccount = await AccountDao.createAccount(req);
    res.json(createdAccount);
  } catch (error) {
    return next(error);
  }
};

exports.getAccountById = async (req, res, next) => {
  try {
    const foundAccount = await AccountDao.findAccountById(req);
    res.json(foundAccount);
  } catch (error) {
    return next(error);
  }
};

exports.deleteAccountById = async (req, res, next) => {
  try {
    const account = await AccountDao.deleteAccountById(req);
    await BalanceHistoryDao.deleteManyBalanceHistoriesBy({ accountId: req.params.id });

    if (!account) {
      res.json({});
    } else {
      const response = { ...account._doc };
      res.json(response);
    }
  } catch (error) {
    return next(error);
  }
};

exports.updateAccountById = async (req, res, next) => {
  try {
    const response = await AccountDao.updateAccount(req);
    const mappedReq = { body: { accountId: req.params.id } };
    await BalanceHistoryDao.generateBalanceHistoryByAccountId(mappedReq);
    res.json(response);
  } catch (error) {
    return next(error);
  }
};
