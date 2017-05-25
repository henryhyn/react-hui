// HUI 组件演示网站的总入口

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.render(
    <Router>
        {Routes}
    </Router>
    , document.getElementById('container'));
