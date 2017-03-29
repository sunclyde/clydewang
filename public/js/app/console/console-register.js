define(['jquery', 'jquery.validate'], function ($) {

    app = app || {};

    var cache = {
        form: $('#consoleRegister'),
        loginBtn: $('.form-action .button.login')
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

    function initValidator() {
        cache.form.validate({
            rules: {
                login: {
                    required: true,
                    minlength: 8,
                    maxlength: 32
                },
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 32
                },
                repeatPassword: {
                    required: true,
                    minlength: 8,
                    maxlength: 32,
                    equalTo: '#password'
                }
            }
        });
    }

    return {
        init: function (param) {
            initCache();
            initDOM();
            initEvent();
            initValidator();
        }
    };
});