const CheckConnection = require('../models/check-connection');

exports.checkConnection = async (req, res) => {
  const newCheck = new CheckConnection();
  newCheck.connectionStatus = 'Success';
  newCheck.save((err, connectionStatus) => {
    err ? res.json(err) : res.json(connectionStatus);
  });
};
