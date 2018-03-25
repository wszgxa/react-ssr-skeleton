const merge = require('webpack-merge');
const server = require('./common/server.webpack.conf');
const common = require('./common/common.webpack.conf');

module.exports =  merge(common, server);
