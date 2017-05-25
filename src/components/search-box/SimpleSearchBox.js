import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import classNames from 'classnames';
const InputGroup = Input.Group;

class SimpleSearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            focus: false
        };
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.state.value = value;
        if (value === null || value === undefined || value.length === 0) {
            this.handleSearch();
        }
        this.setState({
            value: e.target.value
        });
    }

    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement
        });
    }

    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value);
        }
    }

    render() {
        const { size } = this.props;
        const btnCls = classNames({
            'ant-search-btn': true,
            'ant-search-btn-noempty': !!this.state.value.trim()
        });
        const searchCls = classNames({
            'ant-search-input': true,
            'ant-search-input-focus': this.state.focus
        });
        return (
            <InputGroup className={searchCls}>
                <Input placeholder={this.props.placeholder} value={this.state.value}
                       onChange={this.handleInputChange.bind(this)}
                       onFocus={this.handleFocusBlur.bind(this)}
                       onBlur={this.handleFocusBlur.bind(this)}
                       onPressEnter={this.handleSearch.bind(this)}/>

                <div className="ant-input-group-wrap">
                    <Button icon="search" className={btnCls} size={size}
                            onClick={this.handleSearch.bind(this)}/>
                </div>
            </InputGroup>
        );
    }
}

SimpleSearchBox.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func
};

SimpleSearchBox.defaultProps = {
    onSearch: ()=> {
    }
};

export default Form.create()(SimpleSearchBox);
