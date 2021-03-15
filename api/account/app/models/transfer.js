let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let transferSchema = mongoose.Schema({
  accountFrom: {
    type: String,
    required: true,
  },
  accountTo: {
    type: String,
    required: true,
  },
  balanceHistoryIdFrom: {
    type: String,
    required: true,
  },
  balanceHistoryIdTo: {
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
  description: {
    type: String,
  },
  transferLineIds: [String],
});
transferSchema.plugin(uniqueValidator);
let Transfer = (module.exports = mongoose.model('Transfer', transferSchema));
