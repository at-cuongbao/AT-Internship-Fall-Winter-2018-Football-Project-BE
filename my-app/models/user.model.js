const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  accsessToken: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },

});

module.exports = mongoose.model('User', userSchema);
