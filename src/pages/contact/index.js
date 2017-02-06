import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { SearchBox, Hex, MarkEditor } from '../../components';
import { Icon } from 'antd';

class Contact extends Component {
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

    onChange(newValue) {
        console.log('change', newValue);
    }

    render() {
        return (
            <DocumentTitle title='联系我们'>
                <div className='wrapper'>
                    <Icon type='link'/>
                    <SearchBox onSearch={this.handleSearch.bind(this)}/>
                    {this.renderData(this.state.data)}
                    <MarkEditor onChange={this.onChange.bind(this)}/>
                </div>
            </DocumentTitle>
        );
    }
}

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
