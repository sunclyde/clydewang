define(function() {
    var config = {
        'global': {
            'urlconfig': {},
            'theme': {}
        },
        'general': {

        },
        'console': {
            'console': {}
        },
        'console-login': {
            'console': {},
            'console-login': {}
        },
        'console-register': {
            'console': {},
            'console-register': {}
        },
        'datatable': {
            'console': {}
        },
        'preference': {
            'console': {},
            'console-preference': {}
        }
    };

    var getGlobalComponents = function() {
        return getComponents('global');
    };

    var getComponents = function(namespace) {
        var components = [];
        if (config && namespace in config && config[namespace]) {
            var currentPageComponents = config[namespace];
            for (var componentName in currentPageComponents) {
                // console.log("componentName: " + componentName);
                components.push(componentName);
            }
            // console.debug("found components in namespace [" + namespace + "]:" + components);
        }
        return components;
    };

    var getComponentParam = function(namespace, componentName) {
        var param = {};
        if (config && namespace && componentName &&
            namespace in config && config[namespace] &&
            componentName in config[namespace] && config[namespace][componentName]) {
            param = config[namespace][componentName];
        }
        return param;
    };

    return {
        config: config,
        getComponents: getComponents,
        getGlobalComponents: getGlobalComponents,
        getComponentParam: getComponentParam
    };
});