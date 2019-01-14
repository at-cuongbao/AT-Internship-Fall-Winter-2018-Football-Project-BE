const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  start_at: {
    type: Date,
    required: false
  },
  end_at: {
    type: Date,
    required: false
  },
  numGroup: {
    type: Number,
    required: false
  },
  des: {
    type: String,
    required: false
  }

});

module.exports = mongoose.model('Tournament', tournamentSchema);
