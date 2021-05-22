const DataObjectAccess = require('./shared/dataAccessObject');
const BalanceHistory = require('./../models/balanceHistory');
const TransferDao = require('./transfer.dao');
const AccountDao = require('./account.dao');
const { SearchStrategy } = require('../enums/SearchStrategy.enum');

exports.addBalanceHistory = async (options) => {
  return await DataObjectAccess.add(options, BalanceHistory);
};

exports.findBalanceHistories = async (options = {}) => {
  return await DataObjectAccess.find(options, BalanceHistory);
};

exports.findBalanceHistoryById = async (options) => {
  return await DataObjectAccess.findById(options, BalanceHistory);
};

exports.searchForBalanceHistory = async (options) => {
  return await DataObjectAccess.search(options, BalanceHistory);
};

exports.updateBalanceHistoryById = async (options) => {
  return await DataObjectAccess.updateOne(options, BalanceHistory);
};

exports.deleteBalanceHistoryById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, BalanceHistory);
};

exports.deleteManyBalanceHistoriesBy = async (options) => {
  return await DataObjectAccess.delete(options, BalanceHistory);
};

exports.generateBalanceHistoryByAccountId = async (options) => {
  const accountId = options.body.accountId;

  await this.deleteManyBalanceHistoriesBy({ accountId: accountId });
  const account = await AccountDao.getAccountByOneProperty({ _id: accountId });

  const listOfTransfers = await TransferDao.findTransfer(
      { body: { accountFrom: accountId, accountTo: accountId, searchStrategy: SearchStrategy.MATCH_SOME } },
      { sort: '-date' },
  );

  const formattedList = listOfTransfers.map((transfer) => {
    const value = transfer.accountTo === accountId ? `-${parseFloat(transfer.value)}` : parseFloat(transfer.value);
    const valueInPln =
      transfer.accountTo === accountId ? `-${parseFloat(transfer.valueInPln)}` : parseFloat(transfer.valueInPln);
    return {
      ...transfer._doc,
      value: value,
      valueInPln: valueInPln,
    };
  });

  let startBalance = parseFloat(account[0].balance).toFixed(4);
  const balanceHistoryArray = [];

  for (const transfer of formattedList) {
    const newBalanceHistory = new BalanceHistory({
      balance: startBalance,
      date: transfer.date,
      accountId: accountId,
    });
    balanceHistoryArray.push(newBalanceHistory);

    startBalance = (parseFloat(startBalance) + parseFloat(transfer.value)).toFixed(4);
  }

  const newBalanceHistory = new BalanceHistory({
    balance: '0.0',
    date: account[0].dateOfCreate,
    accountId: accountId,
  });
  balanceHistoryArray.push(newBalanceHistory);

  return await BalanceHistory.insertMany(balanceHistoryArray);
};
