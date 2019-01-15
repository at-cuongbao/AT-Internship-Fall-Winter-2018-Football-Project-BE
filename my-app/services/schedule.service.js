const Schedule = require('../models/schedule.model');
const utilities = require('../utilities/index');

module.exports = {
  selectAll: (callback) => {
    Schedule.find(callback);
  },
  createSchedule: (body, callback) => {
    let tournamentId = body.tournamentId;
    body.data.map(group => {
      let groupName = group.name;
      utilities.generateMatchPair(group.teams, false).map(pair => {
        pair.map(item => {
          let schedule = new Schedule({
            tournament: tournamentId,
            group: groupName,
            firstTeam: item[0],
            secondTeam: item[1],
            matchDate: item[2]
          });
          schedule.save(callback);
        });
      });
    });
  },
  getSchedule: (id, callback) => {
    Schedule.find({_id: id}, callback);
  },
  updateSchedule: (id, body, callback) => {
    Schedule.findByIdAndUpdate(id, body, callback);
  },
  deleteSchedule: (id, callback) => {
    Schedule.deleteOne({_id: id}, callback);
  }
}
