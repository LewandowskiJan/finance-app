const DataObjectAccess = require('./shared/dataAccessObject');

const Transfer = require('../models/transfer');
const AccountDao = require('./account.dao');
const TransferLineDao = require('./transferLine.dao');
const {OperationErrorStatus} = require('../errorHandler/models/OperationErrorStatus.enum');
const {SearchStrategy} = require('../enums/SearchStrategy.enum');

exports.addTransfer = async (transfer) => {
  const newTransfer = new Transfer({
    value: transfer.value,
    accountFrom: transfer.accountFrom,
    accountTo: transfer.accountTo,
    currency: transfer.currency,
    date: new Date(transfer.date),
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

  const updatedAccountFrom = await AccountDao.updateAccountBalance(
      transfer.accountFrom,
      `-${transfer.value}`,
      transfer,
  );
  if (!updatedAccountFrom) {
    throw new Error(OperationErrorStatus.LACK_OF_FOUNDS_ERROR);
  }

  await AccountDao.updateAccountBalance(transfer.accountTo, transfer.value, transfer);

  const savedTransfer = await newTransfer.save();
  return savedTransfer;
};

exports.addTransfers = async (transfers) => {
  addedTransfers = [];

  for (const transfer of transfers) {
    const currentTransfer = await this.addTransfer(transfer);
    addedTransfers.push(currentTransfer);
  }

  return addedTransfers;
};

const calculateValue = (value, exchangeRate) => {
  return (parseFloat(value) * parseFloat(exchangeRate)).toFixed(4);
};

exports.findTransfer = async (options) => {
  return await DataObjectAccess.find(options, Transfer);
};

exports.findAllTransfers = async (options) => {
  try {
    const transfers = await DataObjectAccess.find(options, Transfer);

    const searchQuery = {
      search: {
        transferId: transfers.map((transfer) => transfer._id.toString()),
      },
      searchStrategy: SearchStrategy.MATCH_SOME,
    };

    const transferLines = await TransferLineDao.findByPropertiesTransferLines(searchQuery);
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

exports.updateTransfer = async (options) => {
  const updatedTransfer = await DataObjectAccess.findById(options, Transfer);

  if (options.body.value || options.body.exchangeRate) {
    updatedTransfer.exchangeRate = options.body.exchangeRate;
    valueInPln = (parseFloat(transfer.value) * parseFloat(transfer.exchangeRate)).toFixed(4).toString();
  }

  await TransferLineDao.deleteTransferLines(options.body._id);
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
    return {msg: 'too less money'};
  }
};
