const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: false
  },
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
  role: {
    type: String,
    required: false
  },
  lastLogin: {
    type: String,
    required: false
  },
  created: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },

});

module.exports = mongoose.model('User', userSchema);
