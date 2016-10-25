var path = require('path');
var webpack = require('webpack');
// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

var config = require('./webpack.config.js');
config.entry.hui = [path.resolve(SRC_PATH, 'components')];
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
);
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        }
    })
);
module.exports = config;
