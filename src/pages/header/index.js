import './index.less';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Row, Col } from 'antd';
const MenuItem = Menu.Item;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='wrapper'>
                    <Row>
                        <Col span={4}>
                            <Link to='/' className='navbar-brand'>HUI</Link>
                        </Col>
                        <Col span={20}>
                            <Menu mode='horizontal' className='navbar-nav'>
                                <MenuItem>
                                    <Link to='/'>首页</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to='about'>关于</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to='contact'>联系</Link>
                                </MenuItem>
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
