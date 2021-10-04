const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const balanceHistorySchema = mongoose.Schema({
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
module.exports = mongoose.model('BalanceHistory', balanceHistorySchema);
