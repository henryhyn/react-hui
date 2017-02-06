import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/monokai';

class MarkEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AceEditor
                mode='markdown'
                theme='monokai'
                onChange={this.props.onChange}
                name='UNIQUE_ID_OF_MARK_EDITOR'
                width='100%'
                editorProps={{$blockScrolling: true}}
                />
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
