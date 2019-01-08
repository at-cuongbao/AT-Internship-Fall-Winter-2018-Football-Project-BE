const User = require('../models/user.model');

module.exports = {
  index: (req, res) => {
    User.selectAllUser((err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  new: (req, res) => {
    User.createUser(req.body, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    });
  },
  show: (req, res) => {
    const id = req.params.userId;
    User.getUser(id, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  update: (req, res) => {
    const id = req.params.userId;
    User.updateUser(id, req.body, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  delete: (req, res) => {
    const id = req.params.userId;
    User.deleteUser(id, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    })
  },
  updateAge: (req, res) => {
    const id = req.params.userId;
    User.updateAge(id, req.body.age, (err, callback) => {
      if (err) throw err;
      res.json(callback);
    });
  }
}
