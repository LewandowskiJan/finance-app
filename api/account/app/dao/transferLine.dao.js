const TransferLine = require('../models/transferLine');
const DataObjectAccess = require('./shared/DataObjectAccess');

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

exports.addTransferLine = async (req) => {
  return await DataObjectAccess.add(req, TransferLine);
};

exports.findByPropertiesTransferLines = async (req) => {
  return await DataObjectAccess.find(req, TransferLine);
};

exports.deleteTransferLines = async (id) => {
  return await DataObjectAccess.delete({ transferId: id }, TransferLine);
};
