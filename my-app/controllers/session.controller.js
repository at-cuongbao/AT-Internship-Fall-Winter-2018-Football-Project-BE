const User = require('../models/user.model');
const UserService = require('./../services/user.service');
const jwt = require('jsonwebtoken');
// payload, secretOrPrivateKey, [options, callback]
module.exports = {
  registry: (req, res) => {
    UserService.isExistUser(req.body.email, (err, result) => {
      if (err) throw err;
      if (!result) {
        return res.status(401).json({ message: 'Invalid email or password. Please try again!' });
      }
      res.status(401).json({ message: 'Invalid email or password. Please try again!' });
    });
    User.findOne(req.body, (err, user) => {
      if (err) throw err;
      if (user) {
        jwt.sign({ user }, 'secretkey', { expiresIn: '1 day' }, (err, accsessToken) => {
          console.log(user);
          UserService.newAccessToken(user._id, accsessToken, (err, callback) => {
            if (err) throw err;
            res.json('callback: '+callback);
          });
          res.send({
            accsessToken,
            user
          });
        })
      } else {
        res.status(401).json({ message: 'Invalid email or password. Please try again!' });
      }
    });
  },
  login: (req, res) => {
    User.findOne(req.body, function (err, user) {
      if (err) throw err;
      if (user) {
        jwt.sign({ user }, 'secretkey', { expiresIn: '1 day' }, (err, accsessToken) => {
          console.log(user);
          UserService.newAccessToken(user._id, accsessToken, (err, callback) => {
            if (err) throw err;
            res.json('callback: '+callback);
          });
          res.send({
            accsessToken,
            user
          });
        })
      } else {
        res.status(401).json({ message: 'Invalid email or password. Please try again!' });
      }
    });
  }
}
