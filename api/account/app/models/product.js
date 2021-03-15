let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let productSchema = mongoose.Schema({
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
productSchema.plugin(uniqueValidator);
let Product = (module.exports = mongoose.model('Product', productSchema));
