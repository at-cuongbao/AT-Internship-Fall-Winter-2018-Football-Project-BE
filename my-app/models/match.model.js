const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  num: {
    type: String,
    required: false
  },
  play_at: {
    type: String,
    required: false
  },
  knockout: {
    type: String,
    required: false
  },
  home: {
    type: Number,
    required: false
  },
  winner: {
    type: String,
    required: false
  },
  pos: {
    type: String,
    required: false
  },
  round_id: {
    type: String,
    required: true
  },
  competiton_id: {
    type: String,
    required: true
  },
  start_at: {
    type: Date,
    required: false
  }

});

module.exports = mongoose.model('Match', matchSchema);
