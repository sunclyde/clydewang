var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// load routers
var routes = require('./routes/index');
var console = require('./routes/console');
var users = require('./routes/users');
var api = require('./routes/api');
var game = require('./routes/game');

var app = express();
var Page = require('./app/core/Page');
var page = new Page();

// custom ejs template engine renderer
// var ejs = require('ejs');
var customEjs = require('./app/core/CustomEjsEngine');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', customEjs.engine);
app.set('view engine', 'html');

// cookie and session

app.use(cookieParser());
app.use(session({
    secret: 'sunclydeloveverionica1985122319860609',
    name: 'random_card',
    cookie: {
        maxAge: 1800000
    },
    resave: false,
    saveUninitialized: true
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/console', console);
app.use('/api', api);
app.use('/game', game);

app.get('/reload', function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    if (req.query.item == 'menu') {
        customEjs.reload();
        err.status = 2000;
        err.message = "reload complete";
    }
    next(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message || '',
            status: err.status,
            error: err,
            page: {
                ns: 'error'
            }
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message || '',
        status: err.status,
        error: {},
        page: {
            ns: 'error'
        }
    });
});

module.exports = app;