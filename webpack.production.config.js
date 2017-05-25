const path = require('path');
const webpack = require('webpack');
// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

const config = require('./webpack.config.js');
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
