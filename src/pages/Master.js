import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Master extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header/>

                <div className='wrapper'>{this.props.children}</div>

                <Footer/>
            </div>
        );
    }
}

Master.propTypes = {};

Master.defaultProps = {};

export default Master;
