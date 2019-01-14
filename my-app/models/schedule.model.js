const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({

  team_id: {
    type: Schema.Types.ObjectId,
    required: false
  },
  group_id: {
    type: Schema.Types.ObjectId,
    required: false
  }

});

module.exports = scheduleSchema;
