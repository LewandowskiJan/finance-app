const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const expensesGroupSchema = mongoose.Schema({
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
expensesGroupSchema.plugin(uniqueValidator);
module.exports = mongoose.model('ExpensesGroup', expensesGroupSchema);
