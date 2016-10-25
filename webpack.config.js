var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    // 项目入口. 可以直接用文件夹名称, 默认会找 index.js; 也可以确定是哪个文件名字
    entry: {
        app: SRC_PATH
    },
    // 项目出口. 让 webpack 把处理完成的文件放在哪里
    output: {
        path: DIST_PATH,
        libraryTarget: 'umd',
        filename: '[name].js'
    },
    // 模块. 要用什么不同的模块来处理各种类型的文件
    module: {
        loaders: [{
            test: /\.js$/,
            include: SRC_PATH,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.less$/,
            include: SRC_PATH,
            loader: 'style!css!postcss!less'
        }]
    },
    postcss: [autoprefixer],
    plugins: [
        // 添加我们的插件会自动生成一个 html 文件
        new HtmlwebpackPlugin({
            template: 'index.html',
            title: 'Hello World app'
        })
    ]
};
