var express = require('express');
var router = express.Router();

/* GET console */
router.get('/', function(req, res, next) {
  res.render('console/login', {page : 'console-login'});
});
/* POST console */
router.post('/', function(req, res, next) {
  res.render('console/console'{page : 'console'});
});

module.exports = router;
