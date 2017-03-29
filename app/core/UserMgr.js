// var DBMgr = require('./DBMgr');
// var table = "user";
// var schema = require('../schema/schema').user;
// var schema = {
// 		login : { type : String },
// 		password : { type : String }
// 	};
// var user = {login : 'sunclyde', password: 'asdfasdf'};
// var logger = require('log4js').getLogger('UserMgr');
//
// module.exports = {
// 	createUser : function () {
// 		logger.info('create user');
// 		DBMgr.create(user, table, schema);
// 	},
// 	findUser : function () {
// 		logger.info('find user');
// 		return DBMgr.find(user, table, schema);
// 	}
// };

var DBMgr = require('./DBMgr'),
	mongoose = DBMgr.mongoose,
	Schema = mongoose.Schema,
	userSchema = new Schema(require('../schema/schema').user),
	UserModel = mongoose.model('users', userSchema);

module.exports = {
    UserModel : UserModel
};
