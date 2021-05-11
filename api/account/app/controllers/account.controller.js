const AccountDao = require('../dao/account.dao');
const BalanceHistoryDao = require('../dao/balanceHistory.dao');
const {requestParseToOptionObj: requestParseToObj} = require('./shared/requestParser');

exports.getAllAccounts = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const accounts = await AccountDao.getAllAccounts(options);
    res.json(accounts);
  } catch (error) {
    return next(error);
  }
};

exports.getAllAccountsWithBalanceHistory = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const accounts = await AccountDao.getAllAccounts(options);
    const historyBalances = await BalanceHistoryDao.findBalanceHistories(options);

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
  const options = requestParseToObj(req);

  try {
    const createdAccount = await AccountDao.createAccount(options);
    res.json(createdAccount);
  } catch (error) {
    return next(error);
  }
};

exports.getAccountById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const foundAccount = await AccountDao.findAccountById(options);
    res.json(foundAccount);
  } catch (error) {
    return next(error);
  }
};

exports.deleteAccountById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const account = await AccountDao.deleteAccountById(options);
    await BalanceHistoryDao.deleteManyBalanceHistoriesBy({accountId: options.params.id});

    if (!account) {
      res.json({});
    } else {
      const response = {...account._doc};
      res.json(response);
    }
  } catch (error) {
    return next(error);
  }
};

exports.updateAccountById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const response = await AccountDao.updateAccount(options);
    const mappedReq = {body: {accountId: options.params.id}};
    await BalanceHistoryDao.generateBalanceHistoryByAccountId(mappedReq);
    res.json(response);
  } catch (error) {
    return next(error);
  }
};

exports.findAccountByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await AccountDao.searchForAccount(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.resetAllAccountsBalance = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await AccountDao.resterAllAccountsBalance(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
