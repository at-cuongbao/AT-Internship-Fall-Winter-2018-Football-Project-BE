const ScheduleService = require('./../services/schedule.service');

module.exports = {
  index: (req, res) => {
    ScheduleService.selectAll((err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  new: (req, res) => {
    ScheduleService.createMatch(req.body, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    });
  }
  // show: (req, res) => {
  //   const id = req.params.id;
  //   UserService.getUser(id, (err, callback) => {
  //     if (err) throw err;
  //     res.json(callback);
  //   })
  // },
  // update: (req, res) => {
  //   const id = req.params.id;
  //   UserService.updateUser(id, req.body, (err, callback) => {
  //     if (err) throw err;
  //     res.json(callback);
  //   })
  // },
  // delete: (req, res) => {
  //   UserService.deleteUser(req.params.id, (err, callback) => {
  //     if (err) throw err;
  //     res.json(callback);
  //   })
  // },
  // updateAge: (req, res) => {
  //   const id = req.params.id;
  //   UserService.updateAge(id, req.body.age, (err, callback) => {
  //     if (err) throw err;
  //     res.json(callback);
  //   });
  // }
}
