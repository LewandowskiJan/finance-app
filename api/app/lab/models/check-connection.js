const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const checkConnectionSchema = mongoose.Schema({
  connectionStatus: {
    type: String,
    required: true,
  },
  connectionDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
checkConnectionSchema.plugin(uniqueValidator);
module.exports = mongoose.model('CheckConnection', checkConnectionSchema);
