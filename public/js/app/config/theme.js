define(function () {

    var cache = {

    };

    function initCache() {
    }

    function initDOM() {
    }

    function initEvent() {
        $('.switch-theme').on('click', function (el) {
            var data = $(el).attr("data");
            alert(JSON.stringify(data));
            var theme = data.theme;
            alert(theme);
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