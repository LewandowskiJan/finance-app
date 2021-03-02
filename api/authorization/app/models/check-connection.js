let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let checkConnectionSchema = mongoose.Schema({
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
let CheckConnection = (module.exports = mongoose.model('CheckConnection', checkConnectionSchema));
