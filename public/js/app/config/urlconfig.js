define(function() {

    function setupURLs() {
        app = app || {};
        app.urls = {
            /* frontend url configs */
            frontend : {

            },
            /* console url configs */
            console : {
                login : '/console/login',
                register : '/console/register',
                preference : '/console/preference',
                newGroup : '/console/newgroup'
            }
        };
    }

    return {
        init : setupURLs
    }
});