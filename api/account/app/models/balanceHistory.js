let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let balanceHistorySchema = mongoose.Schema({
  balance: {
    type: String,
    required: true,
    default: '0.0',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  accountId: {
    type: String,
    required: true,
  },
});
balanceHistorySchema.plugin(uniqueValidator);
let BalanceHistory = (module.exports = mongoose.model('BalanceHistory', balanceHistorySchema));
