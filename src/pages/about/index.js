import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { FancyTree } from '../../components';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DocumentTitle title='关于我们'>
                <div className='wrapper'>
                    <FancyTree url='/api/cities/'/>
                </div>
            </DocumentTitle>
        );
    }
}

About.propTypes = {};

About.defaultProps = {};

export default About;
