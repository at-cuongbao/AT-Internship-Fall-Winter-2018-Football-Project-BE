const mongoose = require('mongoose');

const Tournament = require('../models/tournament.model');
const Team = require('../models/team.model');

const utilities = require('../utilities/index');

module.exports = {
  selectAll: (callback) => {
    Tournament.find(callback);
  },
  createTournament: (req, callback) => {
    let { tournament, teams } = req.body;

    let groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let j = 0;
    let tournamentId;
    let tournamentTeamIds = [];

    let tournamentInstance = new Tournament({
      name: tournament.name,
      // start_at: tournament.start_at,
      // end_at: tournament.end_at,
      group_number: tournament.group_number,
      // desc: tournament.desc
    });
    tournamentId = tournamentInstance._id;
    tournamentInstance.save(err => {
      if (err) throw err;
    });

    teams.map(team => {
      let teamInstance = new Team({
        // name: team.name,
        // code: team.code,
        // cover: team.cover,
        // logo: team.logo
      });
      teamInstance.save(err => {
        if (err) throw err;
      });
    });

    for (let i = 0; i < tournament.groupNumber; i++) {
      for (j; j < (4 * (i + 1)); j++) {
        let tournamentTeamInstance = new TournamentTeam({
          tournament_id: tournament.id,
          group_name: groupNames[i],
          team_id: teamIds[j]
        });
        tournamentTeamIds.push(tournamentInstance._id);
        tournamentTeamInstance.save(err => {
          if (err) throw err;
        });
      }
      j += 4;
    }

    callback(null, { tournamentId, tournamentTeamIds });
  },
  getTournament: (id, callback) => {
    Tournament.find({ _id: id }, callback);
  },
  updateTournament: (id, body, callback) => {
    Tournament.findByIdAndUpdate(id, body, callback);
  },
  deleteTournament: (id, callback) => {
    Tournament.deleteOne({ _id: id }, callback)
  }
}
