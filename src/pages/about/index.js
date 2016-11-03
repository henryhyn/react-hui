import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { FancyTree } from '../../components';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    handleSelect(selectedKeys, e) {
        if (selectedKeys.length == 0) {
            return false;
        }
        const selected = e.selectedNodes.map(item => item.props.title).join(',');
        this.setState({selected});
    }

    render() {
        return (
            <DocumentTitle title='关于我们'>
                <div className='wrapper'>
                    <p>{this.state.selected}</p>
                    <FancyTree
                        onSelect={this.handleSelect.bind(this)}
                        url='/api/cities/'/>
                </div>
            </DocumentTitle>
        );
    }
}

About.propTypes = {};

About.defaultProps = {};

export default About;
