var express = require('express');
var router = express.Router();

/* GET simple live2d. */
router.get('/', function(req, res, next) {
  res.render('simple', { title: 'Express' });
});

module.exports = router;
