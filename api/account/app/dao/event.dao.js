const DataObjectAccess = require('./shared/DataObjectAccess');
const Event = require('../models/event');

exports.addEvent = async (req) => {
  return await DataObjectAccess.add(req, Event);
};

exports.findEvents = async (req) => {
  return await DataObjectAccess.find(req, Event);
};

exports.findEventById = async (req) => {
  return await DataObjectAccess.findById(req, Event);
};

exports.searchForEvent = async (req) => {
  return await DataObjectAccess.search(req, Event);
};

exports.updateEventById = async (req) => {
  return await DataObjectAccess.updateOne(req, Event);
};

exports.deleteEventById = async (req) => {
  return await DataObjectAccess.findByIdAndDelete(req, Event);
};
