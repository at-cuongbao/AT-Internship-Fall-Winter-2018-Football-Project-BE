const express = require('express');
const router = express.Router();

const scheduleCtrl = require('../controllers/schedule.controller');
const userCtrl = require('../controllers/user.controller');

router.get('/', scheduleCtrl.index);
router.get('/:id', userCtrl.show);
router.post('/', scheduleCtrl.new);
router.patch('/:id', userCtrl.update);
router.delete('/:id', userCtrl.delete);

module.exports = router;
