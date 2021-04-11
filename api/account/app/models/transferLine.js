let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let transferLineSchema = mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  exchangeRate: {
    type: String,
    required: true,
  },
  valueInPln: {
    type: String,
  },
  transferId: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  expensesGroupId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
  },
  projectId: {
    type: String,
  },
  targetId: {
    type: String,
  },
  typeId: {
    type: String,
  },
  eventId: {
    type: String,
  },
  importance: {
    type: String,
  },
});
transferLineSchema.plugin(uniqueValidator);
let TransferLine = (module.exports = mongoose.model('TransferLine', transferLineSchema));
