import './searchbox.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Select, Input, Button } from 'antd';
import classNames from 'classnames';
const InputGroup = Input.Group;

class SmartSearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            focus: false
        };
    }

    handleChange(value) {
        this.state.value = value;
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }

    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement
        });
    }

    handleSelect(value) {
        this.state.value = value;
        this.handleSearch();
    }

    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value);
        }
    }

    render() {
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
                <Select
                    combobox
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    notFoundContent=''
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocusBlur.bind(this)}
                    onBlur={this.handleFocusBlur.bind(this)}
                    onSelect={this.handleSelect.bind(this)}>
                    {this.props.children}
                </Select>

                <div className='ant-input-group-wrap'>
                    <Button icon='search' className={btnCls}
                            onClick={this.handleSearch.bind(this)}/>
                </div>
            </InputGroup>
        );
    }
}

SmartSearchBox.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func
};

SmartSearchBox.defaultProps = {
    placeholder: '关键字',
    onChange: () => {
    },
    onSearch: ()=> {
    }
};

export default Form.create()(SmartSearchBox);
