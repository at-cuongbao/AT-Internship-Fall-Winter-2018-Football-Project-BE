const Match = require('./../models/match.model');

module.exports = {
  selectAll: (callback) => {
    Match.find(callback);
  },
  createMatch: (body, callback) => {
    let data = JSON.parse(body.data);
    let { tournamentId, tournamentTeamIds } = data;
    
    for (let i = 1; i <= 32; i++) {
      let round = (i > 24) ? null : 1;
      let match = new Match({
        play_at: null,
        round: round,
        tournamentId: tournamentId,
        desc: null,
        start_at: null
      });
      match.save((error) => {
        if (error) throw error;
        for (j = 1; j < 3; j++) {
          let score = new score({
            match_id: match._id,
            tournament_team_id: tournamentTeamIds[(i + 1) / 2]
          });
          score.save(err => {
            if (err) throw err;
          });
        }
      });
    }

    callback(null, data);
  },
  getMatch: (id, callback) => {
    Match.find({_id: id}, callback);
  },
  updateMatch: (id, body, callback) => {
    Match.findByIdAndUpdate(id, body, callback);
  },
  deleteMatch: (id, callback) => {
    Match.deleteOne({_id: id}, callback);
  }
}
