const express = require('express');
const router = express.Router();
const userRoute = require('./user.route');

router.get('/', (req, res) => {
  res.send("Hello. This is ./");
});

router.get('/sessions', (req, res) => {
  res.send("Hello. This is sessions. Check user login here");
});

router.use('/users', userRoute);

module.exports = router;
