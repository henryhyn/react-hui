import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DocumentTitle title='联系我们'>
                <div className='main-wrapper'>
                    <div className='wrapper'>contact</div>
                </div>
            </DocumentTitle>
        );
    }
}

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
