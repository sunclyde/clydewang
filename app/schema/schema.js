module.exports = {
    /* frontend */
    customer: {
        customerId : { type : String },
        login : { type : String },
        password : { type : String },
        email : { type : String },
    },
    /* game */
    card: {
        cardId : { type : String },
        rare : { type : String },
        type : { type : String },
        name : { type : String },
        content : { type : String },
        script : { type : String },
    },
    /* backend */
    user : {
        login : { type : String },
        password : { type : String },
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
    },
}