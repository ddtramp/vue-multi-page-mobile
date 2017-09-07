let merge = require('webpack-merge')
let devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    "NODE_ENV": '"production"',
    "environment": '"production"',
    "ajaxBaseUrl": '"http://192.168.0.177:9090"',
    "rpcApi": '"rpcapi"'
})
