requirejs.config({
    paths: {
    	jquery: 'lib/jquery-3.1.1.min',
        console: 'app/console/console'
    }
});

requirejs(['jquery', 'console'], function ($, console) {
	window.app = window.app || {};
	console.init();
});