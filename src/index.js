import React from 'react';
import ReactDOM from 'react-dom';
import { Star } from './components';

ReactDOM.render(
    <div>
        <Star rank={0}/>
        <Star rank={10}/>
        <Star rank={20}/>
        <Star rank={30}/>
        <Star rank={35}/>
        <Star rank={40}/>
        <Star rank={45}/>
        <Star rank={50}/>
    </div>
    , document.getElementById('container'));
