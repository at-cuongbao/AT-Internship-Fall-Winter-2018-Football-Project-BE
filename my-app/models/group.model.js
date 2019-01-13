const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  num: {
    type: Number,
    required: false
  }

});

module.exports = mongoose.model('Group', groupSchema);
