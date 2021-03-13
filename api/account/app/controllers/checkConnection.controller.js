const CheckConnection = require('../models/checkConnection');

exports.checkConnection = async (req, res) => {
  const newCheck = new CheckConnection();
  newCheck.connectionStatus = 'Success';
  newCheck.save((err, connectionStatus) => {
    err ? res.status(400).json(err) : res.json(connectionStatus);
  });
};
