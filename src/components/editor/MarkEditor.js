import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';
import AceEditor from 'react-ace';
import Remarkable from 'remarkable';
import MarkViewer from './MarkViewer';

import 'brace/mode/markdown';
import 'brace/theme/monokai';

const md = new Remarkable();

class MarkEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(value) {
        this.setState({
            value: value
        });
        this.props.onChange(value);
    }

    render() {
        return (
            <Row gutter={16}>
                <Col span={12}>
                    <AceEditor
                        mode='markdown'
                        theme='monokai'
                        onChange={this.handleChange.bind(this)}
                        name='UNIQUE_ID_OF_MARK_EDITOR'
                        width='100%'
                        editorProps={{$blockScrolling: true}}
                        value={this.state.value}/>
                </Col>
                <Col span={12}>
                    <MarkViewer
                        width='100%'
                        html={md.render(this.state.value)}/>
                </Col>
            </Row>
        );
    }
}

MarkEditor.propTypes = {
    onChange: PropTypes.func
};

MarkEditor.defaultProps = {
    onChange: () => {
    }
};

export default MarkEditor;
