const DataObjectAccess = require('./shared/dataAccessObject');
const Event = require('../models/event');

exports.addEvent = async (options) => {
  return await DataObjectAccess.add(options, Event);
};

exports.findEvents = async (options) => {
  return await DataObjectAccess.find(options, Event);
};

exports.findEventById = async (options) => {
  return await DataObjectAccess.findById(options, Event);
};

exports.searchForEvent = async (options) => {
  return await DataObjectAccess.search(options, Event);
};

exports.updateEventById = async (options) => {
  return await DataObjectAccess.updateOne(options, Event);
};

exports.deleteEventById = async (options) => {
  return await DataObjectAccess.findByIdAndDelete(options, Event);
};
