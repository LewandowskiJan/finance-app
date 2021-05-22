const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const transferSchema = mongoose.Schema({
  accountFrom: {
    type: String,
    required: true,
  },
  accountTo: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    default: 'PLN',
    required: true,
  },
  exchangeRate: {
    type: String,
    default: '1',
    required: true,
  },
  valueInPln: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
  },
  transferLineIds: [String],
});
transferSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Transfer', transferSchema);
