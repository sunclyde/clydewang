define(function () {

    var cache = {};

    function initCache() {
    }

    function initDOM() {
    }

    function initEvent() {
        $('form').on('click', function () {
            console.log('focus');
            $('.form-message').html('');
        });
    }

    return {
        init: function (param) {
            initCache();
            initDOM();
            initEvent();
        }
    };
});