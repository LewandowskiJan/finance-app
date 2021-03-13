const EventDao = require('../dao/event.dao');

exports.addEvent = async (req, res) => {
  try {
    const result = await EventDao.addEvent(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const result = await EventDao.findEventById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const result = await EventDao.findEvents(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findEventByName = async (req, res) => {
  try {
    const result = await EventDao.searchForEvent(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateEventById = async (req, res) => {
  try {
    const result = await EventDao.updateEventById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteEventById = async (req, res) => {
  try {
    const result = await EventDao.deleteEventById(req);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
