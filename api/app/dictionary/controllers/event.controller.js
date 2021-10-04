const EventDao = require('../dao/event.dao');
const { requestParseToOptionObj: requestParseToObj } = require('../../shared/requestParser');

exports.addEvent = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await EventDao.addEvent(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getEventById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await EventDao.findEventById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.getAllEvents = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await EventDao.findEvents(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.findEventByName = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await EventDao.searchForEvent(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.updateEventById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await EventDao.updateEventById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.deleteEventById = async (req, res, next) => {
  const options = requestParseToObj(req);

  try {
    const result = await EventDao.deleteEventById(options);
    res.json(result);
  } catch (error) {
    return next(error);
  }
};
