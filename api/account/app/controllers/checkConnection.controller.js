const CheckConnection = require('../models/checkConnection');
const {requestParseToOptionObj: requestParseToObj} = require('./shared/requestParser');

exports.checkConnection = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const newCheck = new CheckConnection(options);
    newCheck.connectionStatus = 'Success';
    const result = await newCheck.save();
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
