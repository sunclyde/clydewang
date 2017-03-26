define(function() {

    app = app || {};

	var cache = {
	    form : $('#consoleRegister'),
        loginBtn : $('.form-action .button.login')
    };

    function initCache() {
    }

    function initDOM() {

    }

    function initEvent() {
        cache.loginBtn.on('click', function () {
            window.location = app.urls.console.login;
        });
    }

	return {
		init : function(param) {
			initCache();
			initDOM();
			initEvent();
		}
    };
});