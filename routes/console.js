var express = require('express');
var router = express.Router();
var UserMgr = require('../app/core/UserMgr');
//UserMgr.createUser();

/* GET login */
router.get('/', function(req, res, next) {
    if (!!req.session.authenticated) {
        res.render('console/console', {});
    } else {
        res.render('console/login', {});
    }
});

/* GET login */
router.get('/login', function(req, res, next) {
    res.render('console/login', {});
});

/* POST login */
router.post('/login', function(req, res, next) {
    res.render('console/login_success', {});
});

/* GET register */
router.get('/register', function(req, res, next) {
    res.render('console/register', {});
});

/* POST register */
router.post('/register', function(req, res, next) {
    res.render('console/register_success', {});
});

module.exports = router;
