const UserService = require('./../services/user.service');

module.exports = {
  index: (req, res) => {
    UserService.selectAllUser((err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  new: (req, res) => {
    UserService.createUser(req.body, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    });
  },
  show: (req, res) => {
    const id = req.params.id;
    UserService.getUser(id, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  update: (req, res) => {
    const id = req.params.id;
    UserService.updateUser(id, req.body, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  delete: (req, res) => {
    UserService.deleteUser(req.params.id, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  updateAge: (req, res) => {
    const id = req.params.id;
    UserService.updateAge(id, req.body.age, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    });
  }
}
