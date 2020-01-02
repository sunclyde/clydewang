var express = require('express');
var router = express.Router();
var Page = require('../app/core/Page');

/* GET card library. */
router.get('/card', function(req, res, next) {
	page = new Page();
	page.ns = 'library';
	res.render('library/card', {page: page});
});

module.exports = router;
