let merge = require('webpack-merge')
let prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    "NODE_ENV": '"development"',
    "environment": '"development"',
    "ajaxBaseUrl": '"http://192.168.0.177:9090"',
    "rpcApi": '"rpcapi"'
})
