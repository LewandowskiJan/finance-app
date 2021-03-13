const TypeDao = require('../dao/type.dao');

exports.addType = async (req, res) => {
  try {
    const result = await TypeDao.addType(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getTypeById = async (req, res) => {
  try {
    const result = await TypeDao.findTypeById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllTypes = async (req, res) => {
  try {
    const result = await TypeDao.findTypes(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findTypeByName = async (req, res) => {
  try {
    const result = await TypeDao.searchForType(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateTypeById = async (req, res) => {
  try {
    const result = await TypeDao.updateTypeById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteTypeById = async (req, res) => {
  try {
    const result = await TypeDao.deleteTypeById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
