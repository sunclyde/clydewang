var express = require('express');
var router = express.Router();
var Page = require('../app/core/Page');
var UserMgr = require('../app/core/UserMgr');

/* GET console */
router.get('/', function (req, res, next) {
    var page = new Page();
    if (!!req.session.authenticated) {
        page.ns = 'console';
        res.render('console/console', {page : page});
    } else {
        page.ns = 'console-login';
        res.render('console/login', {page : page});
    }
});

/* GET login */
router.get('/login', function (req, res, next) {
    var page = new Page();
    page.ns = 'console-login';
    res.render('console/login', {page : page});
});

/* POST login */
router.post('/login', function (req, res, next) {
    var page = new Page();
    page.ns = 'console-login';
    UserMgr.UserModel.findOne(req.body, function (err, result) {
        if (result != null) {
            console.log('user ' + result.login + ' logged in');
            req.session.authenticated = true;
            res.redirect('/console');
        } else {
            page.params['formMessage'] = 'Username and Password not match, please try again.';
            req.session.authenticated = false;
            res.render('console/login', {page : page});
        }
    });
});

/* GET register */
router.get('/register', function (req, res, next) {
    var page = new Page();
    page.ns = 'console-register';
    res.render('console/register', {page : page});
});

/* POST register */
router.post('/register', function (req, res, next) {
    var page = new Page();
    page.ns = 'console-register';
    var UserModel = UserMgr.UserModel;
    var user = new UserModel(req.body);
    user.save(function (err) {
        if (err) {
            req.session.authenticated = false;
            res.render('console/register', {page : page});
        } else {
            req.session.authenticated = true;
            res.redirect('/console');
        }
    });
});

module.exports = router;
