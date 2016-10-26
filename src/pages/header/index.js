import './index.less';
import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='wrapper'>
                    <div className='navbar-header'>
                        <Link to='/' className='navbar-brand'>HUI</Link>
                    </div>
                    <div className='navbar-nav'>
                        <ul>
                            <li><Link to='/'>首页</Link></li>
                            <li><Link to='about'>关于</Link></li>
                            <li><Link to='contact'>联系</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
