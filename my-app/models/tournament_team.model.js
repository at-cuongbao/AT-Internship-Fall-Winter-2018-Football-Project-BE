const mongoose = require('mongoose');

const tournament_teamSchema = mongoose.Schema({
  tournament_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tournament'
  },
  groupName: {
    type: String
  },
  team_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team'
  }
});

module.exports = mongoose.model('Tournament_team', tournament_teamSchema);
