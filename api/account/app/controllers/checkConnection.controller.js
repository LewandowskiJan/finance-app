const CheckConnection = require('../models/checkConnection');

exports.checkConnection = async (req, res, next) => {
  try {
    const newCheck = new CheckConnection();
    newCheck.connectionStatus = 'Success';
    await newCheck.save();
    res.json(connectionStatus);
  } catch (error) {
    return next(error);
  }
};
