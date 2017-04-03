module.exports = {
	user : {
		login : { type : String },
		password : { type : String }
	},
    preferenceAttribute : {
        id : { type : String },
        name : { type : String },
        type : { type : String },
    },
    preferenceGroup : {
        id : { type : String },
        name : { type : String },
        attributes : { type : Array },
    }
}