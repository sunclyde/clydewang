define(function() {

    app = app || {};

	var cache = {
	    form : $('#consoleLogin'),
        registerBtn : $('.form-action .button.register')
    };

    function initCache() {
    }

    function initDOM() {

    }

    function initEvent() {
        cache.registerBtn.on('click', function () {
            window.location = app.urls.console.register;
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