const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  num: {
    type: Number,
    required: false
  },
  code: {
    type: String,
    required: false
  }

});

module.exports = mongoose.model('Team', teamSchema);
