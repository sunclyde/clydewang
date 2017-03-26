var express = require('express');
var router = express.Router();
var UserMgr = require('../app/core/UserMgr');
var logger = require('log4js').getLogger('users');
//UserMgr.createUser();

/* GET login */
router.get('/', function(req, res, next) {
    res.render('console/login', {page : 'console-login'});
});

/* GET register */
router.get('/register', function(req, res, next) {
    res.render('console/login', {page : 'console-login'});
});

/* POST login */
router.post('/login', function(req, res, next) {
    res.render('console/login_success', {page : 'console-register'});
});

/* POST register */
router.post('/register', function(req, res, next) {
    res.render('console/register_success', {page : 'console-register'});
});

module.exports = router;
