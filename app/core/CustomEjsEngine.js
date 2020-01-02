const ejs = require('ejs');
// example: global config
const consts = require('../../config/consts.json');
var menu = require('../../config/menu.json');

// custom ejs render function
module.exports = {
    "engine": function render(filename, payload = {}, callback) {
        // some default page vars
        payload.consts = consts;
        payload.page = payload.page || {};
        payload.page.title = payload.page.title || consts.page.title;
        payload.page.description = payload.page.title || consts.page.description;
        payload.page.keywords = payload.page.title || consts.page.keywords;
        payload.page.headLogo = payload.page.title || consts.page.headLogo;
        payload.page.ns = payload.page.ns || "general"

        // load default menu
        payload.menu = payload.menu || menu;
        payload.menupartialview = appRoot + '/views/menu/partialmenu.html';

        // renderer
        ejs.renderFile(filename, payload, {}, callback);
    },
    "reload": function() {
        delete require.cache[require.resolve('../../config/menu.json')];  
        menu = require('../../config/menu.json');     
        console.info("--- Reloaded menu ---");   
        console.info(JSON.stringify(menu));
        console.info("---------------------");
    }
}