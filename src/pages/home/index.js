import React, { Component } from 'react';
import { SearchBox, Hex } from '../../components';
import { Icon } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            data: [],
            completed: false,
            visible: false
        };
    }

    handleSearch(keyword) {
        Hex.get('https://api.github.com/search/users', {q: keyword}, data => this.setState({
            total: data.total_count,
            data: data.items,
            completed: data.incomplete_results
        }));
    }

    renderData(data) {
        if (data === null || data === undefined || data.length === 0) {
            return false;
        }
        return (
            <div>
                {
                    data.map((item, i)=> {
                        return <div key={i}>{item.login}</div>;
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                <Icon type='link'/>
                <SearchBox onSearch={this.handleSearch.bind(this)}/>
                {this.renderData(this.state.data)}
            </div>
        );
    }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
