// HUI 组件演示网站的总入口

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import Routes from './Routes';

ReactDOM.render(
    <Router history={hashHistory}>
        {Routes}
    </Router>
    , document.getElementById('container'));
