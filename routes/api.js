var express = require('express');
var router = express.Router();
var util = require('../app/util/util');
var JSONResponse = require('../app/game/JSONResponse');
var CustomerMgr = require('../app/game/CustomerMgr');

var jr = new JSONResponse();

/* GET account */
router.get('/', function (req, res, next) {

    var resBody = { a : 1, b : 2};

    res.json(resBody);
});

module.exports = router;
