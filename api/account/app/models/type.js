let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let typeSchema = mongoose.Schema({
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
typeSchema.plugin(uniqueValidator);
let Type = (module.exports = mongoose.model('Type', typeSchema));
