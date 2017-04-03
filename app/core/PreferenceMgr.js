var DBMgr = require('./DBMgr'),
	mongoose = DBMgr.mongoose,
	Schema = mongoose.Schema,
    preferenceAttributeSchema = new Schema(require('../schema/schema').preferenceAttribute),
    preferenceGroupSchema = new Schema(require('../schema/schema').preferenceGroup),
    PreferenceAttributeModel = mongoose.model('preference_attribute', preferenceAttributeSchema),
    PreferenceGroupModel = mongoose.model('preference_group', preferenceGroupSchema);

module.exports = {
    PreferenceAttributeModel : PreferenceAttributeModel,
    PreferenceGroupModel : PreferenceGroupModel
};
