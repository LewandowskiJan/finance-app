const TransferLineDao = require('../dao/transferLine.dao');
const { requestParseToOptionObj: requestParseToObj } = require('../../shared/requestParser');

exports.getAllTransferLines = async (req, res, next) => {
  const options = requestParseToObj(req);
  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllTransferLinesByProperties = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
