import './index.less';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Menu, Row, Col, Icon } from 'antd';
import { StringUtils } from '../../components';
const MenuItem = Menu.Item;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { location } = this.context.router;
        const module = location.pathname.replace('\/', '');
        const activeMenuItem = StringUtils.isValid(module) ? module : '/';
        return (
            <nav className='hui-navbar'>
                <div className='wrapper'>
                    <Row>
                        <Col span={4}>
                            <Link to='/' className='hui-navbar-brand'>{this.props.title}</Link>
                        </Col>
                        <Col span={20}>
                            <Menu mode='horizontal' className='hui-navbar-nav' selectedKeys={[activeMenuItem]}>
                                {
                                    this.props.data.map(item => {
                                        return (
                                            <MenuItem key={item.path}>
                                                <Link to={item.path}>
                                                    {item.icon ? <Icon type={item.icon}/> : false} {item.name}
                                                </Link>
                                            </MenuItem>
                                        );
                                    })
                                }
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

Navbar.defaultProps = {
    title: 'Project Name',
    data: []
};

Navbar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Navbar;
