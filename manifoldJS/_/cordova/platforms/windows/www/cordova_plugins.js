cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-hostedwebapp/www/hostedWebApp.js",
        "id": "cordova-plugin-hostedwebapp.hostedwebapp",
        "clobbers": [
            "hostedwebapp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-hostedwebapp/src/windows/HostedWebAppPluginProxy.js",
        "id": "cordova-plugin-hostedwebapp.HostedWebAppPluginProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/windows/NetworkInfoProxy.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-hostedwebapp": "0.1.4",
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-network-information": "1.2.0"
}
// BOTTOM OF METADATA
});