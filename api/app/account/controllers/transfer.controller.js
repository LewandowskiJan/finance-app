const TransferDao = require('../dao/transfer.dao');
const { requestParseToOptionObj: requestParseToObj } = require('../../shared/requestParser');

exports.getAllTransfers = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const transfers = await TransferDao.findAllTransfers(options);
    res.json(transfers);
  } catch (error) {
    return next(error);
  }
};

exports.addTransfer = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const newTransfer = await TransferDao.addTransfer(options.body);
    res.json(newTransfer);
  } catch (error) {
    return next(error);
  }
};

exports.addTransfers = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const newTransfers = await TransferDao.addTransfers(options);
    res.json(newTransfers);
  } catch (error) {
    return next(error);
  }
};

exports.getTransferById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const newTransfer = await TransferDao.findTransfer(options);
    res.json(newTransfer);
  } catch (error) {
    return next(error);
  }
};
