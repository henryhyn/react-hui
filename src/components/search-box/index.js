import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    }

    handleChange(e) {
        this.setState({keyword: e.target.value});
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.keyword} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.props.onSearch.bind(this, this.state.keyword)}>搜索</button>
            </div>
        );
    }
}

SearchBox.propTypes = {
    onSearch: PropTypes.func
};

SearchBox.defaultProps = {
    onSearch: ()=> {
    }
};

export default SearchBox;
