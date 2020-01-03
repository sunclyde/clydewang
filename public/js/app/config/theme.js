define(function () {

    var cache = {

    };

    function initCache() {
    }

    function initDOM() {
    }

    function initEvent() {
        $('.switch-theme').on('click', function () {
            var theme = $(this).data().theme || "default";
            $("body").attr("data-theme", theme);
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