const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  match_id: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: false
  }

});

module.exports = mongoose.model('Score', scoreSchema);
