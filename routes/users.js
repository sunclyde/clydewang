var express = require('express');
var router = express.Router();
var UserMgr = require('../app/core/UserMgr');
var logger = require('log4js').getLogger('users');

/* GET users listing. */
router.get('/', function(req, res, next) {
	logger.info("get");
	UserMgr.createUser();
	res.send('respond with a resource');
});

module.exports = router;
