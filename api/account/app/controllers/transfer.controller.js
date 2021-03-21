const TransferDao = require('../dao/transfer.dao');

exports.getAllTransfers = async (req, res, next) => {
  try {
    const transfers = await TransferDao.findAllTransfers(req.body);
    res.json(transfers);
  } catch (error) {
    return next(error);
  }
};

exports.addTransfer = async (req, res, next) => {
  try {
    const newTransfer = await TransferDao.addTransfer(req.body, next);
    res.json(newTransfer);
  } catch (error) {
    return next(error);
  }
};

exports.getTransferById = async (req, res, next) => {
  try {
    const newTransfer = await TransferDao.findTransfer(req.body);
    res.json(newTransfer);
  } catch (error) {
    return next(error);
  }
};
