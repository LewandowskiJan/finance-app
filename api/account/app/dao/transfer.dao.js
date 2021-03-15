const DataObjectAccess = require('./shared/DataObjectAccess');

const Transfer = require('../models/transfer');
const AccountDao = require('./account.dao');
const TransferLineDao = require('./transferLine.dao');

exports.addTransfer = async (transfer) => {
  newTransfer = new Transfer();
  newTransfer.value = transfer.value;
  newTransfer.accountFrom = transfer.accountFrom;
  newTransfer.accountTo = transfer.accountTo;
  newTransfer.currency = transfer.currency;

  let valueInPln;

  if (transfer.exchangeRate) {
    newTransfer.exchangeRate = transfer.exchangeRate;
    valueInPln = this.calculateValue(transfer.value, transfer.exchangeRate).toString();
  } else {
    valueInPln = transfer.value;
  }

  const transferLines = await TransferLineDao.addTransferLines(transfer, newTransfer._id);

  newTransfer.valueInPln = valueInPln;
  newTransfer.transferLineIds = transferLines;

  const res1 = await AccountDao.updateAccount(transfer.accountFrom, `-${valueInPln}`);
  if (res1) {
    const res2 = await AccountDao.updateAccount(transfer.accountTo, valueInPln);
    await newTransfer.save();
    return newTransfer;
  } else {
    return { msg: 'too less money' };
  }
};


calculateValue = (value, exchangeRate) => {
  return (parseFloat(value) * parseFloat(exchangeRate)).toFixed(4);
};

exports.findTransfer = async (req) => {
  return await DataObjectAccess.find(req, Transfer);
};

exports.findAllTransfers = async (req) => {
  try {
    const transfers = await DataObjectAccess.find(req, Transfer);
    const transferLines = await TransferLineDao.findByPropertiesTransferLines();
    return transfers.map((transfer) => {
      return {
        ...transfer._doc,
        transferLines: transferLines.filter((tl) => tl.transferId === transfer._id.toString()),
      };
    });
  } catch (error) {
    throw Error(error);
  }
};

exports.updateTransfer = async (req) => {
  const updatedTransfer = await DataObjectAccess.findById(req, Transfer);

  if (req.body.value || req.body.exchangeRate) {
    updatedTransfer.exchangeRate = req.body.exchangeRate;
    valueInPln = (parseFloat(transfer.value) * parseFloat(transfer.exchangeRate)).toFixed(4).toString();
  }

  await TransferLineDao.deleteTransferLines(req.body._id);
  const transferLines = await TransferLineDao.addTransferLines(transfer, newTransfer._id);

  newTransfer.valueInPln = valueInPln;
  newTransfer.transferLineIds = transferLines;

  const res1 = await AccountDao.updateAccount(transfer.accountFrom, `-${valueInPln}`);
  if (res1) {
    const res2 = await AccountDao.updateAccount(transfer.accountTo, valueInPln);

    updatedTransfer.balanceHistoryIdFrom = re1;
    updatedTransfer.balanceHistoryIdTo = res2;

    await newTransfer.save();
    return newTransfer;
  } else {
    return { msg: 'too less money' };
  }
};
