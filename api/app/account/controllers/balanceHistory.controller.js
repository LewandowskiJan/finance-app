const BalanceHistoryDao = require('../dao/balanceHistory.dao');
const { requestParseToOptionObj: requestParseToObj } = require('../../shared/requestParser');

exports.generateBalanceHistoryByAccountId = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const response = await BalanceHistoryDao.generateBalanceHistoryByAccountId(options);
    res.json(response);
  } catch (error) {
    return next(error);
  }
};
