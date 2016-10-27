import './index.less';
import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer className='hui-footer'>
                <div className='wrapper'>{this.props.children}</div>
            </footer>
        );
    }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
