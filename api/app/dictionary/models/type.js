const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const typeSchema = mongoose.Schema({
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
module.exports = mongoose.model('Type', typeSchema);
