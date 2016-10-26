# HUI [![Build Status](https://travis-ci.org/henryhyn/react-hui.svg?branch=master)](https://travis-ci.org/henryhyn/react-hui) [![npm version](https://img.shields.io/npm/v/react-hui.svg)](https://www.npmjs.org/package/react-hui)

基于 React 的 Web 前端组件库

## 安装

```
npm install react-hui
```

## 示例

```
import 'react-hui/dist/hui.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Mask } from 'react-hui';

ReactDOM.render(
    <Mask/>
    , document.getElementById('container'));
```

## 贡献代码

整个项目有两个入口:

1.  `src/components/index.js` HUI 组件对外输出的总入口
    -   加载样式文件
        -   加载 `normalize.css`
        -   加载全局样式文件
            -   加载全局 variable, mixin 的总入口 `style/fn.less`
                -   加载 variable
                -   加载 mixin
            -   定义全局样式
    -   加载 React 组件
2.  `src/index.js` HUI 组件演示网站的总入口
    -   加载路由配置文件 `Routes.js`
        -   加载布局页面 `pages/Master.js`
        -   加载 `pages` 下面的各个页面

开发注意事项:

1.  开发组件:
    -   组件的所有文件都必须放在一个文件夹下
    -   组件文件夹的命名全部采用小写, 单词之间用中划线连接
    -   `index.js` 必选, 为 React 组件的主文件
    -   `index.less` 可选, 为 React 组件的样式文件, 样式命名必须以 `hui-` 打头
    -   组件开发完成以后, 需要在入口文件 `src/components/index.js` 中登记
2.  开发样式:
    -   组件的样式文件必须定义在该组件所在的文件夹下
    -   `style` 下定义的是全局 variable 和 mixin
    -   样式文件开发完成以后, 需要在入口文件 `style/fn.less` 中登记


