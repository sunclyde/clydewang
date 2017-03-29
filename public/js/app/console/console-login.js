define(['jquery.validate'], function(validator) {

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

    function initValidator() {
        cache.form.validate({
            rules: {
                login: {
                    required: true
                },
                password: {
                    required: true
                }
            }
        });
    }

	return {
		init : function(param) {
			initCache();
			initDOM();
			initEvent();
            initValidator();
		}
    };
});