const DataObjectAccess = require('./shared/DataObjectAccess');
const BalanceHistory = require('./../models/balanceHistory');
const TransferDao = require('./transfer.dao');
const AccountDao = require('./account.dao');
const { SearchStrategy } = require('../enums/SearchStrategy.enum');

exports.addBalanceHistory = async (req) => {
  return await DataObjectAccess.add(req, BalanceHistory);
};

exports.findBalanceHistories = async (req = {}) => {
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

exports.deleteManyBalanceHistoriesBy = async (req) => {
  return await DataObjectAccess.delete(req, BalanceHistory);
};

exports.generateBalanceHistoryByAccountId = async (req) => {
  const accountId = req.body.accountId;
  const account = await AccountDao.getAccountByOneProperty({ _id: accountId });
  await this.deleteManyBalanceHistoriesBy({ accountId: accountId });

  const listOfTransfers = await TransferDao.findTransfer(
    { accountFrom: accountId, accountTo: accountId, searchStrategy: SearchStrategy.MATCH_SOME },
    { sort: 'date' }
  );

  const formattedList = listOfTransfers.map((transfer) => {
    const value = transfer.accountFrom === accountId ? `-${transfer.value}` : transfer.value;
    const valueInPln = transfer.accountFrom === accountId ? `-${transfer.valueInPln}` : transfer.valueInPln;
    return {
      ...transfer._doc,
      value: value,
      valueInPln: valueInPln,
    };
  });

  let startBalance = parseFloat(account[0].balance);
  const balanceHistoryArray = [];

  const newBalanceHistory = new BalanceHistory({
    balance: startBalance,
    date: account.dateOfCreate,
    accountId: accountId,
  });
  balanceHistoryArray.push(newBalanceHistory);

  for (const transfer of formattedList) {
    startBalance = (parseFloat(startBalance) - parseFloat(transfer.value)).toFixed(4).toString();

    const newBalanceHistory = new BalanceHistory({
      balance: startBalance,
      date: transfer.date,
      accountId: accountId,
    });
    balanceHistoryArray.push(newBalanceHistory);
  }

  return await BalanceHistory.insertMany(balanceHistoryArray);
};
