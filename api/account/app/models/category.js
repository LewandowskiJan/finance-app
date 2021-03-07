let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  utfIcon: {
    type: String,
    required: true,
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
categorySchema.plugin(uniqueValidator);
let Category = (module.exports = mongoose.model('Category', categorySchema));
