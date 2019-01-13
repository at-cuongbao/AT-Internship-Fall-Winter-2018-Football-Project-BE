const mongoose = require('mongoose');

const competition_teamSchema = mongoose.Schema({
  competition_id: {
    type: String,
    required: false
  },
  team_id: {
    type: String,
    required: false
  },
  group_id: {
    type: String,
    required: false
  }

});

module.exports = mongoose.model('Competition_team', competition_teamSchema);
