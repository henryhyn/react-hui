import React from 'react';
import { Route } from 'react-router-dom';

import Master from './pages/Master';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

const Routes = (
    <Master>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
    </Master>
);

export default Routes;
