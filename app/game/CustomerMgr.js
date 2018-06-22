var DBMgr = require('../core/DBMgr'),
	mongoose = DBMgr.mongoose,
	Schema = mongoose.Schema,
	customerSchema = new Schema(require('../schema/schema').customer),
	CustomerModel = mongoose.model('customers', customerSchema);

module.exports = {
    CustomerModel : CustomerModel
};
