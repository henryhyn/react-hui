const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

const config = {
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
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'eslint-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [['import', {libraryName: 'antd', style: 'css'}]],
                    presets: ['es2015', 'react']
                }
            }
        }, {
            test: /\.css/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }]
            })
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            })
        }, {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            use: 'url-loader'
        }]
    },
    // 启用 source-map
    devtool: 'source-map',
    // 配置 webpack-dev-server 代理
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        compress: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8081',
                secure: false
            }
        }
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        // 添加我们的插件会自动生成一个 html 文件
        new HtmlWebpackPlugin({
            template: 'index.html',
            chunks: ['app'],
            title: 'Hello World app'
        })
    ]
};

module.exports = config;
