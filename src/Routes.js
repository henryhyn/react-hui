import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Master from './pages/Master';
import Home from './pages/home';
import About from './pages/about';
import PageNotFound from './pages/error/PageNotFound';

const Routes = (
    <Route path='/' component={Master}>
        <IndexRoute component={Home}/>
        <Route path='about' component={About}/>
        <Route path='*' component={PageNotFound}/>
    </Route>
);

export default Routes;
