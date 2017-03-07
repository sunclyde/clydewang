var DBMgr = require('./DBMgr');
var table = "user";
var schema = require('../schema/schema').user;
var schema = {
		login : { type : String },
		password : { type : String }
	};
var user = {login : 'sunclyde', password: 'asdfasdf'};
var logger = require('log4js').getLogger('UserMgr');

module.exports = {
	createUser : function () {
		logger.info('create user');
		DBMgr.create(user, table, schema);
	}
};