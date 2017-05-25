import './index.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Mask extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, transparent } = this.props;
        const cls = classNames({
            'hui-mask': true,
            'hui-mask-transparent': transparent
        }, className);


        if (this.props.visible) {
            return (
                <div className={cls}/>
            );
        } else {
            return false;
        }
    }
}

Mask.propTypes = {
    visible: PropTypes.bool,
    transparent: PropTypes.bool
};

Mask.defaultProps = {
    visible: false,
    transparent: false
};

export default Mask;
