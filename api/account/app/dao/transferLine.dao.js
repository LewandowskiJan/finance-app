const TransferLine = require('../models/transferLine');
const DataObjectAccess = require('./shared/dataAccessObject');

exports.addTransferLines = async (transfer, id) => {
  const transferLines = [];
  for (const line of transfer.transferLines) {
    const valueInPln = parseFloat(line.value) * parseFloat(transfer.exchangeRate);
    const addedTransferLine = await this.addTransferLine({
      body: { ...line, transferId: id, exchangeRate: transfer.exchangeRate, valueInPln: valueInPln.toFixed(4) },
    });
    transferLines.push(addedTransferLine._id);
  }

  return transferLines;
};

exports.addTransferLine = async (options) => {
  return await DataObjectAccess.add(options, TransferLine);
};

exports.findByPropertiesTransferLines = async (options) => {
  return await DataObjectAccess.find(options, TransferLine);
};

exports.deleteTransferLines = async (id) => {
  return await DataObjectAccess.delete({ transferId: id }, TransferLine);
};
