const express = require('express');
const router = express.Router();

const matchCtrl = require('../controllers/match.controller');

const utilities = require('../utilities/index');

router.get('/', matchCtrl.index);
router.get('/new', matchCtrl.new);
router.get('/:id', matchCtrl.show);
router.get('/show/:tournamentId', matchCtrl.showByTournament);
router.patch('/:id', utilities.verifyToken, matchCtrl.update);
router.delete('/:id', utilities.verifyToken, matchCtrl.delete);

module.exports = router;
