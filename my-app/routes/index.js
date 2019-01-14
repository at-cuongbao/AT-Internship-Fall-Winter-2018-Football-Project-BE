const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');
const matchRoute = require('./schedule.route');
const scheduleRoute = require('./schedule.route');
const sessionCrl = require('./../controllers/session.controller');

router.get('/', (req, res) => {
  res.send("Hello. This is ./");
});

router.post('/sessions', sessionCrl.login);
router.use('/users', userRoute);
router.use('/matchs', matchRoute);
router.use('/schedules', scheduleRoute);

module.exports = router;
