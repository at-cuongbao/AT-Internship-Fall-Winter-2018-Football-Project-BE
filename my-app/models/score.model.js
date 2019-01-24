const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  score_id: {
    type: String,
    required: false
  },
  tournament_team_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'TournamentTeam'
  },
  home: {
    type: String,
    required: false
  },
  winner: {
    type: String
  },
  score: {
    type: String,
    required: false
  }
}, { strict: false });

module.exports = mongoose.model('Score', scoreSchema);
