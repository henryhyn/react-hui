// HUI 组件演示网站的总入口

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from './Routes';

ReactDOM.render(
    <Router history={browserHistory}>
        {Routes}
    </Router>
    , document.getElementById('container'));
