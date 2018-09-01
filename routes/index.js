var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('opencv', { title: 'Express' });
});

/* GET home page. */
router.get('/opencv', function(req, res, next) {
  res.render('opencv', { title: 'Express' });
});

module.exports = router;
