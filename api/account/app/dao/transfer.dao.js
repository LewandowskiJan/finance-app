const DataObjectAccess = require('./shared/DataObjectAccess');

const Transfer = require('../models/transfer');
const AccountDao = require('./account.dao');
const TransferLineDao = require('./transferLine.dao');
const { OperationErrorStatus } = require('../errorHandler/models/OperationErrorStatus.enum');

exports.addTransfer = async (transfer, next) => {
  let newTransfer = new Transfer({
    value: transfer.value,
    accountFrom: transfer.accountFrom,
    accountTo: transfer.accountTo,
    currency: transfer.currency,
  });

  let valueInPln;
  if (transfer.exchangeRate) {
    newTransfer.exchangeRate = transfer.exchangeRate;
    valueInPln = calculateValue(transfer.value, transfer.exchangeRate).toString();
  } else {
    valueInPln = transfer.value;
  }

  const transferLines = await TransferLineDao.addTransferLines(transfer, newTransfer._id);

  newTransfer.valueInPln = valueInPln;
  newTransfer.transferLineIds = transferLines;

  const updatedAccountFrom = await AccountDao.updateAccountBalance(transfer.accountFrom, `-${transfer.value}`);
  if (!updatedAccountFrom) {
    throw new Error(OperationErrorStatus.LACK_OF_FOUNDS_ERROR);
  }
  await AccountDao.updateAccountBalance(transfer.accountTo, transfer.value);

  const savedTransfer = await newTransfer.save();
  return savedTransfer;
};

const calculateValue = (value, exchangeRate) => {
  return (parseFloat(value) * parseFloat(exchangeRate)).toFixed(4);
};

exports.findTransfer = async (req, options) => {
  return await DataObjectAccess.find(req, Transfer, options);
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

  const res1 = await AccountDao.updateAccountBalance(transfer.accountFrom, `-${valueInPln}`);
  if (res1) {
    const res2 = await AccountDao.updateAccountBalance(transfer.accountTo, valueInPln);

    updatedTransfer.balanceHistoryIdFrom = re1;
    updatedTransfer.balanceHistoryIdTo = res2;

    await newTransfer.save();
    return newTransfer;
  } else {
    return { msg: 'too less money' };
  }
};
