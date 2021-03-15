const CheckConnection = require('../models/checkConnection');

exports.checkConnection = async (req, res, next) => {
  try {
    const newCheck = new CheckConnection();
    newCheck.connectionStatus = 'Success';
    const result = await newCheck.save();
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
