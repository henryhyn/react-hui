import './index.less';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Row, Col, Icon } from 'antd';
const MenuItem = Menu.Item;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { location } = this.context.router;
        const module = location.pathname.replace('\/', '');
        const activeMenuItem = module || 'home';
        return (
            <nav className='navbar'>
                <div className='wrapper'>
                    <Row>
                        <Col span={4}>
                            <Link to='/' className='navbar-brand'>HUI Web 组件库</Link>
                        </Col>
                        <Col span={20}>
                            <Menu mode='horizontal' className='navbar-nav' selectedKeys={[activeMenuItem]}>
                                <MenuItem key='home'>
                                    <Link to='/'><Icon type='appstore'/> 首页</Link>
                                </MenuItem>
                                <MenuItem key='about'>
                                    <Link to='about'><Icon type='setting'/> 关于</Link>
                                </MenuItem>
                                <MenuItem key='contact'>
                                    <Link to='contact'><Icon type='mail'/> 联系</Link>
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

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Header;
