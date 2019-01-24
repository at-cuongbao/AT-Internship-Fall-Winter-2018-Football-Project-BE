const express = require('express');
const router = express.Router();

const matchCtrl = require('../controllers/match.controller');

router.get('/', matchCtrl.index);
router.get('/new', matchCtrl.new);
router.post('/', matchCtrl.new);
router.get('/:id', matchCtrl.show);
router.get('/show/:tournamentId', matchCtrl.showByTournament);
router.patch('/:id', matchCtrl.update);
router.delete('/:id', matchCtrl.delete);

module.exports = router;
