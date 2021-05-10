let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let accountSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  alias: {
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
  isExternal: {
    type: Boolean,
    default: true,
    required: true,
  },
  balance: {
    type: String,
    default: '0.0',
  },
  currency: {
    type: String,
    default: 'PLN',
  },
});
accountSchema.plugin(uniqueValidator);
let Account = (module.exports = mongoose.model('Account', accountSchema));
