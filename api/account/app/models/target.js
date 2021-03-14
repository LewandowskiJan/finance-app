let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let targetSchema = mongoose.Schema({
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
targetSchema.plugin(uniqueValidator);
let Target = (module.exports = mongoose.model('Target', targetSchema));
