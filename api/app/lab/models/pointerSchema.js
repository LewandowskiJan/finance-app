const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const pointerSchema = mongoose.Schema({
  time: {
    type: Date,
    required: true,
  },
  dateOfCreate: {
    type: Date,
    default: Date.now,
  },
  light: {
    type: String,
    require: true,
  },
  humidity: {
    type: String,
    require: true,
  },
  temperature: {
    type: String,
    require: true,
  },
  moisture: {
    type: String,
    require: true,
  },
  plantName: {
    type: String,
    default: 'test',
  },
});
pointerSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Pointer', pointerSchema);
