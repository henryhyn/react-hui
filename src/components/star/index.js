import './index.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { rank } = this.props;
        const cls = classNames({
            'hui-star': true
        }, `rank${rank}`);

        return (
            <span className={cls}/>
        );
    }
}

Star.propTypes = {
    rank: PropTypes.number
};

Star.defaultProps = {
    rank: 0
};

export default Star;
