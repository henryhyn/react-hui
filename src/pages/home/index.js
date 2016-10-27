import './index.less';
import React, { Component } from 'react';
import { SearchBox, Hex } from '../../components';
import { Icon } from 'antd';
import Banner from './Banner';

function getStyle() {
    return `
        #container, #container > .page-wrapper {
            height: 100%;
        }
        nav.hui-navbar {
            position: fixed;
            left: 0;
            right: 0;
            z-index: 999;
            background: rgba(0, 0, 0, 0.25);
            border-bottom: 1px solid transparent;
        }
    `;
}

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
            <div className='home-wrapper'>
                <Banner/>
                <Banner/>
                <Icon type='link'/>
                <SearchBox onSearch={this.handleSearch.bind(this)}/>
                {this.renderData(this.state.data)}
                <style dangerouslySetInnerHTML={{ __html: getStyle() }}/>
            </div>
        );
    }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
