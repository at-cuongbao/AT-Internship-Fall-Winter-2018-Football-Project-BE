const Tournament = require('../models/tournament.model');

module.exports = {
  selectAll: (callback) => {
    Tournament.find(callback);
  },
  createTournament: (body, callback) => {
    const tournament = new Tournament(body);
    tournament.save(callback);
  },
  getTournament: (id, callback) => {
    Tournament.find({_id: id}, callback);
  },
  updateTournament: (id, body, callback) => {
    Tournament.findByIdAndUpdate(id, body, callback);
  },
  deleteTournament: (id, callback) => {
    Tournament.deleteOne({_id: id}, callback)
  }
}
