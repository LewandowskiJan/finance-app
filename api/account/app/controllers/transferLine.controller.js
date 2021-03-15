const TransferLineDao = require('../dao/transferLine.dao');

exports.getAllTransferLines = async (req, res) => {
  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllTransferLinesByProperties = async (req, res) => {
  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
