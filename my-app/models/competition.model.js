const mongoose = require('mongoose');

const competitionSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
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

module.exports = mongoose.model('Competition', competitionSchema);
