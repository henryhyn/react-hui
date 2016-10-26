import React, { Component } from 'react';

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>页面没有找到, 可能还在开发中...</div>
        );
    }
}

PageNotFound.propTypes = {};

PageNotFound.defaultProps = {};

export default PageNotFound;
