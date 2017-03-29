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
                register : '/console/register'
            }
        };
    }

    return {
        init : setupURLs
    }
});