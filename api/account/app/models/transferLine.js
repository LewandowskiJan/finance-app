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
  transferId: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  groupId: {
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
  eventId: {
    type: String,
  },
});
transferLineSchema.plugin(uniqueValidator);
let TransferLine = (module.exports = mongoose.model('TransferLine', transferLineSchema));
