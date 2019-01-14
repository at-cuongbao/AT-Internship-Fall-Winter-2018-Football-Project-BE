const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
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
  score: {
    type: String,
    required: false
  },
  pos: {
    type: String,
    required: false
  },
  round_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  tournament_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  tournament_team_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  start_at: {
    type: Date,
    required: false
  }

}, {strict: false});

module.exports = mongoose.model('Match', matchSchema);
