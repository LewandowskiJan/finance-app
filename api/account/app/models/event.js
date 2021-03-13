let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let groupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfCreate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
groupSchema.plugin(uniqueValidator);
let Group = (module.exports = mongoose.model('Group', groupSchema));
