import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DocumentTitle title='页面没有找到'>
                <div className='wrapper'>页面没有找到, 可能还在开发中...</div>
            </DocumentTitle>
        );
    }
}

PageNotFound.propTypes = {};

PageNotFound.defaultProps = {};

export default PageNotFound;
