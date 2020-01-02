require.config({
    paths: {
        'jquery' :              'lib/jquery-3.1.1.min',
        'jquery.validate' :     'lib/jquery.validate.min',
        'componentMgr' :        'module/componentMgr',
        'theme' :               'app/config/theme',
        'urlconfig' :           'app/config/urlconfig',
        'console' :             'app/console/console',
        'console-login' :       'app/console/console-login',
        'console-register' :    'app/console/console-register',
        'console-preference' :  'app/console/console-preference'
    },
    shim: {
        'jquery.validate': ['jquery']
    }
});

var app = app || {
        page : {},
        components : {}
    };

require(['jquery', 'componentMgr'], function ($, componentMgr) {
    console.log('init app');
    loadNamespace();
    loadGlobalComponents(componentMgr);
    loadPageComponents(componentMgr);
});

function empty(object) {
    if (typeof object == 'undefined') {
        return true;
    }
    if (object == null) {
        return true;
    }
    if (typeof object == 'string' && object.length == 0) {
        return true;
    }
    if (object instanceof Array && object.length == 0) {
        return true;
    }
    return false;
}

function loadNamespace() {
    var namespace = $('body').data('namespace') || 'unknown';
    app.page.namespace = namespace;
    if (namespace == 'unknown') {
        console.warn("unknown namespace");
    } else {
        console.log('namespace ' + namespace);
    }
}

function loadComponents(componentMgr, namespace) {
    var components = componentMgr.getComponents(namespace) || [],
        componentsNames = components,
        initializedComponents = [],
        duplicatedComponents = [],
        errorComponents = [];

    app.components[namespace] = components;

    require(componentsNames, function(components) {

        for (var index in arguments) {
            var component = arguments[index];
            var componentName = componentsNames[index];
            if (componentName in initializedComponents) {
                duplicatedComponents.push(componentName);
                continue;
            }
            try {
                var componentParam = componentMgr.getComponentParam(namespace, componentName);
                component.init(componentParam);
                initializedComponents.push(componentName);
            } catch (e) {
                // console.error(e);
                errorComponents.push(componentName);
            }
        }

        if (initializedComponents.length > 0) {
            console.info('initialized [' + namespace + '] components:');
            console.info(initializedComponents);
        }
        if (duplicatedComponents.length > 0) {
            console.info('duplicated [' + namespace + '] components:');
            console.info(duplicatedComponents);
        }
        if (errorComponents.length > 0) {
            console.info('error [' + namespace + '] components:');
            console.info(errorComponents);
        }
    });
}


function loadGlobalComponents(componentMgr) {
    loadComponents(componentMgr, 'global');
}

function loadPageComponents(componentMgr) {
    loadComponents(componentMgr, app.page.namespace);
}
