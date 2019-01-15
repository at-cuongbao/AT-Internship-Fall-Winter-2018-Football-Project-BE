const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
  tournament: {
    type: Number,
  },
  group: {
    type: String,
  },
  firstTeam: {
    type: String,
  },
  secondTeam: {
    type: String,
  },
  matchDate: {
    type: Date
  }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
