var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var logger = require('log4js').getLogger('DBMgr');

var options = {
    db_user: "sunclyde",
    db_pwd: "wfk2kmD!",
    db_host: "ds029496.mlab.com",
    db_port: 29496,
    db_name: "clydewang"
};

//mongodb://sunclyde:wfk2kmD!@ds029496.mlab.com:29496/clydewang
var dbURL = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name;

var connect = function () {
	var db = mongoose.createConnection(dbURL);
	mongoose.connection.on('connected', function (err) {
		if (err) {
			logger.error('Database connection failure');
		} else {
			logger.info('Mongodb connected')
		}
	});
	mongoose.connection.on('error', function (err) {
		logger.error('Mongoose connected error ' + err);
	});
	mongoose.connection.on('disconnected', function () {
		logger.error('Mongoose disconnected');
	});
	process.on('SIGINT', function () {
		mongoose.connection.close(function () {
			logger.info('Mongoose disconnected through app termination');
			process.exit(0);
		});
	});
	return db;
}

module.exports = {
	create : function (object, table, schema) {
		try {
			var db = connect();
			logger.info('object', object);
			logger.info('table', table);
			logger.info('schema', schema);
			var model = db.model(table, schema);
			logger.info('data');
			var data = new model(object);
			logger.info('save');
			data.save(function(err){
				if (err) {
					logger.error(err);
				} else {
					logger.info('data inserted');
				}
				db.close();
			});
		}
		catch (e) {
			logger.error('error: ' + e);
		}
	}
}