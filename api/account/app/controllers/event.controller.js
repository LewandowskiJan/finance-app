const EventDao = require('../dao/event.dao');

exports.addEvent = async (req, res, next) => {
  try {
    const result = await EventDao.addEvent(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getEventById = async (req, res, next) => {
  try {
    const result = await EventDao.findEventById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllEvents = async (req, res, next) => {
  try {
    const result = await EventDao.findEvents(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findEventByName = async (req, res, next) => {
  try {
    const result = await EventDao.searchForEvent(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateEventById = async (req, res, next) => {
  try {
    const result = await EventDao.updateEventById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteEventById = async (req, res, next) => {
  try {
    const result = await EventDao.deleteEventById(req);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
