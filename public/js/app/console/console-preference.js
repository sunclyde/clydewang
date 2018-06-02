define(['jquery', 'jquery.validate'], function ($) {

    app = app || {};

    var cache = {
        form: $('#newGroup'),
        cancelBtn: $('.form-action .button.cancel'),
        newGroupBtn: $('.form-action .button.newGroup'),
        preferenceGroup: $('li.preferenceGroup')
    };

    function initCache() {
    }

    function initDOM() {
    }

    function initEvent() {
        cache.cancelBtn.on('click', function (e) {
            window.location = app.urls.console.preference;
        });
        cache.newGroupBtn.on('click', function (e) {
            window.location = app.urls.console.newGroup;
        });
        cache.preferenceGroup.on('click', '.table-action.edit', function(e) {
            var groupId = $(this).parent().data('id');
            console.log('clicked edit group ' + groupId);
        });
        cache.preferenceGroup.on('click', '.table-action.remove', function(e) {
            var groupId = $(this).parent().data('id');
            console.log('clicked remove group ' + groupId);
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