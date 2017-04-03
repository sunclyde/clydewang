define(function () {

    var cache = {

    };

    function initCache() {
    }

    function initDOM() {
    }

    function initEvent() {
        $('form').on('click', function () {
            console.log('focus');
            $('.form-message').html('');
        });

        $('.header-menu').on('mouseenter', function(el){
            $('.header-menu').removeClass('active');
            $('.header-menu ul').hide();
            $(this).addClass('active');
            $(this).find('ul').show();
        });

        $('.header-menu').on('mouseleave', function(el){
            $('.header-menu').removeClass('active');
        });

        $('.header-menu ul').on('mouseleave', function (el) {
            $(this).hide();
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