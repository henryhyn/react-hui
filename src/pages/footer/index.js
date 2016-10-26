import './index.less';
import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer id='footer'>
                <div className='wrapper'>Footer</div>
            </footer>
        );
    }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
