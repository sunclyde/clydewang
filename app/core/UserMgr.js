var DBMgr = require('./DBMgr'),
	mongoose = DBMgr.mongoose,
	Schema = mongoose.Schema,
	userSchema = new Schema(require('../schema/schema').user),
	UserModel = mongoose.model('users', userSchema);

module.exports = {
    UserModel : UserModel
};
