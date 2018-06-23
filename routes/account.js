var express = require('express');
var router = express.Router();
var util = require('../app/util/util');
var JSONResponse = require('../app/game/JSONResponse');
var CustomerMgr = require('../app/game/CustomerMgr');

var jr = new JSONResponse();

/*
router.use(function (req, res, next) {
    try {
        initSession(req);

        var noLoginPath = [
                '/account/',
                '/account/login',
                '/account/register'
            ], inPath = false,
            path = null,
            err = null;

        if (!!!req.session.cuustomerAthenticated) {
            for (var i = 0; i < noLoginPath.length; i++) {
                path = noLoginPath[i];
                if (!util.empty(path) && (path == req.originalUrl)) {
                    inPath = true;
                    break;
                }
            }
            console.log('not in path? ' + !inPath);
            if (!inPath) {
                err = new Error('Not authenticated');
                err.status = 401;
            }
        }
        next(err);
    } catch (e) {
        console.log(e);
    }
});

/* GET account /
router.get('/', function (req, res, next) {
    if (!!!req.session.cuustomerAthenticated) {
        res.redirect('/account/login');
    } else {
        page = new Page();
        page.ns = 'account';
        //page.params['customer'] = req.session.username;
        res.render('account', {page: page});
    }
});

/* GET login /
router.get('/login', function (req, res, next) {
    page = new Page();
    page.ns = 'account-login';
    res.render('account/login', {page: page});
});

/* GET logout /
router.get('/logout', function (req, res, next) {
    req.session.cuustomerAthenticated = false;
    //req.session.username = "";
    res.redirect('/account/login');
});

/* POST login /
router.post('/login', function (req, res, next) {
    page = new Page();
    page.ns = 'account-login';
    CustomerMgr.CustomerModel.findOne(req.body, function (err, result) {
        if (result != null) {
            console.log('user ' + result.login + ' logged in');
            req.session.cuustomerAthenticated = true;
            //req.session.username = result.login;
            res.redirect('/account');
        } else {
            page.params['formMessage'] = 'Username and Password not match, please try again.';
            req.session.cuustomerAthenticated = false;
            //req.session.username = "";
            res.render('account/login', {page: page});
        }
    });
});

/* GET register /
router.get('/register', function (req, res, next) {
    page = new Page();
    page.ns = 'console-register';
    res.render('console/register', {page: page});
});

/* POST register /
router.post('/register', function (req, res, next) {
    page = new Page();
    page.ns = 'console-register';
    var CustomerModel = CustomerMgr.CustomerModel;
    var user = new CustomerModel(req.body);
    user.save(function (err) {
        if (err) {
            req.session.cuustomerAthenticated = false;
            res.render('console/register', {page: page});
        } else {
            req.session.cuustomerAthenticated = true;
            res.redirect('/console');
        }
    });
});

*/

module.exports = router;
