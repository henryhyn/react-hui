import './index.less';
import React, { Component } from 'react';
import Banner from './Banner';

function getStyle() {
    return `
        #container, #container > .page-wrapper {
            height: 100%;
        }
        nav.hui-navbar {
            position: fixed;
            left: 0;
            right: 0;
            z-index: 999;
            background: rgba(0, 0, 0, 0.25);
            border-bottom: 1px solid transparent;
        }
    `;
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='home-wrapper'>
                <Banner/>
                <style dangerouslySetInnerHTML={{ __html: getStyle() }}/>
            </div>
        );
    }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
