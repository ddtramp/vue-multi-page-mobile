let merge = require('webpack-merge')
let devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    "NODE_ENV": "production",
    "environment": '"production"',
    "ajaxBaseUrl": '"test_gray"',
    "rpcApi": '"rpcapi"'
})
