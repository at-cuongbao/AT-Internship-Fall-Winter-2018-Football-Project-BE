const Schedule = require('../models/schedule.model');

module.exports = {
  selectAll: (callback) => {
    Schedule.find(callback);
  },
  createSchedule: (body, callback) => {
    let data = JSON.parse(body.data);
    let { tournamentId, tournamentTeamIds } = data;

    // schedules.map(pair => {
    //   pair.map(item => {
    //     let schedule = new Schedule({
    //       tournament_id: tournamentId,
    //       group_name: item[0],
    //       first_teams_id: item[1],
    //       second_team_id: item[2]
    //       // matchDate: item[3]
    //     });
    //     schedule.save(err => {
    //       if (err) throw err;
    //     });
    //   });
    // });

    callback(null, data);
  },
  getSchedule: (id, callback) => {
    Schedule.find({ _id: id }).exec(callback);
  },
  getScheduleByTournament: (id, callback) => {
    Schedule.find({ tournament_id: id })
      .populate('tournament_id').exec(callback);
  },
  updateSchedule: (id, body, callback) => {
    Schedule.findByIdAndUpdate(id, body, callback);
  },
  deleteSchedule: (id, callback) => {
    Schedule.deleteOne({ _id: id }, callback);
  }
}
