const TransferDao = require('../dao/transfer.dao');

exports.getAllTransfers = async (req, res) => {
  try {
    const transfers = await TransferDao.findAllTransfers(req.body);
    res.json(transfers);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addTransfer = async (req, res) => {
  try {
    const newTransfer = await TransferDao.addTransfer(req.body);
    res.json(newTransfer);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getTransferById = async (req, res) => {
  try {
    const newTransfer = await TransferDao.addTransfer(req.body);
    res.json(newTransfer);
  } catch (err) {
    res.status(400).json(err);
  }
};
