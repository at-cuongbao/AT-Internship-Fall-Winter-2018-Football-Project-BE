const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
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
