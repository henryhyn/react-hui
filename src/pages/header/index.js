import React, { Component } from 'react';
import { Navbar } from '../../components';

const menus = [
    {name: '首页', path: '/', icon: 'appstore'},
    {name: '关于', path: 'about', icon: 'setting'},
    {name: '联系', path: 'contact', icon: 'mail'}
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar title='HUI Web 组件库' data={menus}/>
        );
    }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
