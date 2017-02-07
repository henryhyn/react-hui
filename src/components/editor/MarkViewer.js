import './markdown.less';
import React, { Component, PropTypes } from 'react';

class MarkViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { width, height } = this.props;
        const divStyle = {width, height};

        return (
            <div
                className='wmd-preview'
                style={divStyle}
                dangerouslySetInnerHTML={{ __html: this.props.html }}/>
        );
    }
}

MarkViewer.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    html: PropTypes.string
};

MarkViewer.defaultProps = {
    height: '500px',
    width: '500px',
    html: ''
};

export default MarkViewer;
