var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	logger.info("get");
	res.send('respond with a resource');
});

/* Get Register */
router.post('/register', function(req, res, next) {
    res.render('console/register');
});

module.exports = router;
