import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Navbar, Footer } from '../components';

const menus = [
    {name: '首页', path: '/', icon: 'appstore'},
    {name: '关于', path: 'about', icon: 'setting'},
    {name: '联系', path: 'contact', icon: 'mail'}
];

class Master extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar title='HUI Web 组件库' data={menus}/>

                <div className='page-wrapper'>
                    <div className='wrapper'>{this.props.children}</div>
                </div>

                <Footer>
                    <Row>
                        <Col span={6}>
                            <h2>代码托管</h2>
                            <ul>
                                <li><a href='https://github.com/henryhyn/react-hui'>仓库</a></li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h2>相关站点</h2>
                            <ul>
                                <li><a href='https://github.com/henryhyn/react-hui'>仓库</a></li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h2>联系我们</h2>
                            <ul>
                                <li><a href='https://github.com/henryhyn/react-hui'>仓库</a></li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h2>出品方</h2>
                            <ul>
                                <li><a href='https://github.com/henryhyn/react-hui'>仓库</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Footer>
            </div>
        );
    }
}

Master.propTypes = {};

Master.defaultProps = {};

export default Master;
