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
        preferenceGroupId : { type : String },
        preferenceGroupName : { type : String },
        attributes : { type : Array },
    }
}