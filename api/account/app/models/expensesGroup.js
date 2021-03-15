let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let expensesGroupSchema = mongoose.Schema({
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
let ExpensesGroup = (module.exports = mongoose.model('ExpensesGroup', expensesGroupSchema));
