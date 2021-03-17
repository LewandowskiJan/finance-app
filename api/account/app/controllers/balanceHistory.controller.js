const BalanceHistoryDao = require('../dao/balanceHistory.dao');

exports.generateBalanceHistoryByAccountId = async (req, res, next) => {
  try {
    const response = await BalanceHistoryDao.generateBalanceHistoryByAccountId(req);
    res.json(response);
  } catch (error) {
    return next(error);
  }
};
