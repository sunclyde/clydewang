define(['jquery', 'jquery.validate'], function ($) {

    app = app || {};

    var cache = {
        form: $('#newGroup'),
        cancelBtn: $('.form-action .button.cancel'),
        newGroupBtn: $('.form-action .button.newGroup'),
        deleteGroupBtn: $('.form-action .button.deleteGroup')
    };

    function initCache() {
    }

    function initDOM() {
    }

    function initEvent() {
        cache.cancelBtn.on('click', function () {
            window.location = app.urls.console.preference;
        });
        cache.newGroupBtn.on('click', function () {
            window.location = app.urls.console.newGroup;
        });
    }

    function initValidator() {
        cache.form.validate({
            rules: {
                preferenceGroupId: {
                    required: true,
                    minlength: 4,
                    maxlength: 255
                },
                preferenceGroupName: {
                    required: true,
                    minlength: 4,
                    maxlength: 255
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