import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DocumentTitle title='关于我们'>
                <div className='main-wrapper'>
                    <div className='wrapper'>about</div>
                </div>
            </DocumentTitle>
        );
    }
}

About.propTypes = {};

About.defaultProps = {};

export default About;
