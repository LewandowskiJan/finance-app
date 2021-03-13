const TargetDao = require('../dao/target.dao');

exports.addTarget = async (req, res) => {
  try {
    const result = await TargetDao.addTarget(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getTargetById = async (req, res) => {
  try {
    const result = await TargetDao.findTargetById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllTargets = async (req, res) => {
  try {
    const result = await TargetDao.findTargets(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findTargetByName = async (req, res) => {
  try {
    const result = await TargetDao.searchForTarget(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateTargetById = async (req, res) => {
  try {
    const result = await TargetDao.updateTargetById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteTargetById = async (req, res) => {
  try {
    const result = await TargetDao.deleteTargetById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
