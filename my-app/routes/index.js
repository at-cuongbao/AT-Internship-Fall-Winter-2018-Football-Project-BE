const express = require('express');
const router = express.Router();
const userRoute = require('./user.route');
const sessionCrl = require('./../controllers/session.controller');

router.get('/', (req, res) => {
  res.send("Hello. This is ./");
});

router.post('/sessions', sessionCrl.login);

router.use('/users', userRoute);

module.exports = router;
