import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree, Modal, Form, Input, Button, Popconfirm } from 'antd';
const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
import { Hex } from '../../components';

class FancyTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            isNew: false,
            eventKey: null,
            visible: false,
            actionVisible: false,
            treeData: []
        };
    }

    loadDataFromServer() {
        const url = this.props.url + 'tree';
        Hex.get(url, data => this.setState({treeData: [data]}));
    }

    componentDidMount() {
        this.loadDataFromServer();
    }

    handleRightClick(info) {
        info.event.preventDefault();
        this.setState({
            eventKey: info.node.props.eventKey,
            actionVisible: true
        });
    }

    handleSubmit() {
        const params = {
            parentId: this.state.category.parentId,
            name: this.state.category.name || ''
        };

        if (this.state.isNew) {
            const url = this.props.url;
            Hex.post(url, params, data => this.setState({treeData: [data], visible: false}));
        } else {
            const url = this.props.url + this.state.category.id;
            Hex.put(url, params, data => this.setState({treeData: [data], visible: false}));
        }
    }


    handleNewClick() {
        this.setState({
            isNew: true,
            category: {parentId: this.state.eventKey},
            actionVisible: false,
            visible: true
        });
    }

    handleEditClick() {
        const url = this.props.url + this.state.eventKey;
        Hex.get(url, data => this.setState({
            isNew: false,
            category: data,
            actionVisible: false,
            visible: true
        }));
    }

    handleDeleteClick() {
        const url = this.props.url + this.state.eventKey;
        Hex.delete(url, data => this.setState({treeData: [data], actionVisible: false}));
    }

    render() {
        const loop = data => data.map(item => {
            if (item.children) {
                return <TreeNode title={item.label} key={item.id}>{loop(item.children)}</TreeNode>;
            } else {
                return <TreeNode title={item.label} key={item.id} isLeaf={item.children === null}/>;
            }
        });
        const treeNodes = loop(this.state.treeData || []);
        const formItemLayout = {
            labelCol: {span: 3},
            wrapperCol: {span: 21}
        };
        return (
            <div>
                <Tree
                    onSelect={this.props.onSelect}
                    onRightClick={this.handleRightClick.bind(this)}>
                    {treeNodes}
                </Tree>

                <Modal
                    title='选择功能'
                    visible={this.state.actionVisible}
                    onCancel={() => this.setState({actionVisible: false})}>
                    <ul className='list-inline'>
                        <li><Button onClick={this.handleNewClick.bind(this)}>新建子节点</Button></li>
                        <li><Button onClick={this.handleEditClick.bind(this)}>编辑节点</Button></li>
                        <li>
                            <Popconfirm title='确定要删除吗?' onConfirm={this.handleDeleteClick.bind(this)}>
                                <Button>删除节点</Button>
                            </Popconfirm>
                        </li>
                    </ul>
                </Modal>

                <Modal
                    title='新建子节点'
                    visible={this.state.visible}
                    onOk={this.handleSubmit.bind(this)}
                    onCancel={() => this.setState({visible: false})}>
                    <Form horizontal>
                        <FormItem {...formItemLayout} label='名称'>
                            <Input name='category/name'
                                   value={this.state.category.name}
                                   onChange={e => Hex.handleChangeByName(this, e)}/>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

FancyTree.propTypes = {
    onSelect: PropTypes.func,
    url: PropTypes.string
};

FancyTree.defaultProps = {
    onSelect: ()=> {
    },
    url: ''
};

export default FancyTree;
