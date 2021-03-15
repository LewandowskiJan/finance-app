const TransferLineDao = require('../dao/transferLine.dao');

exports.getAllTransferLines = async (req, res, next) => {
  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllTransferLinesByProperties = async (req, res, next) => {
  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
