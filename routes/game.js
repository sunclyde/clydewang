var express = require('express');
var router = express.Router();
var Page = require('../app/core/Page');

/* GET users listing. */
router.get('/', function(req, res, next) {
	page = new Page();
	page.ns = 'game';
	res.render('game/game', {page: page});
});

module.exports = router;
