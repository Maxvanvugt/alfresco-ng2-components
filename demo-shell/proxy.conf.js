require('dotenv').config();

var PROXY_HOST_ADF = process.env.PROXY_HOST_ADF;
console.log('PROXY_HOST_ADF' + PROXY_HOST_ADF);
module.exports = {
    "/alfresco": {
        "target": (PROXY_HOST_ADF || "http://localhost:8080"),
        "secure": false,
        "pathRewrite": {
            "^/alfresco/alfresco": ""
        },
        "changeOrigin": true,
        // workaround for REPO-2260
        onProxyRes: function (proxyRes, req, res) {
            const header = proxyRes.headers['www-authenticate'];
            if (header && header.startsWith('Basic')) {
                proxyRes.headers['www-authenticate'] = 'x' + header;
            }
        }
    },
    "/activiti-app": {
        "target": (PROXY_HOST_ADF || "http://localhost:8080"),
        "secure": false,
        "pathRewrite": {
            "^/activiti-app/activiti-app": ""
        },
        "changeOrigin": true
    }
};
