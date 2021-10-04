const Pointer = require('../models/pointerSchema');

exports.getData = async (req, res) => {
  const response = await Pointer.find({}).limit(1000);

  return res.json(response);
};
