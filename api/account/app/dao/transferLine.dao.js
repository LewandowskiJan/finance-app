const TransferLine = require('../models/transferLine');
const DataObjectAccess = require('./shared/DataObjectAccess');

exports.addTransferLines = async (transfer, id) => {
  const transferLines = [];

  for (const line of transfer.transferLines) {
    const addedTransferLine = await this.addTransferLine({ body: { ...line, transferId: id } });
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
