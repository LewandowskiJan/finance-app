let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let projectSchema = mongoose.Schema({
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
projectSchema.plugin(uniqueValidator);
let Project = (module.exports = mongoose.model('Project', projectSchema));
