import React, { Component } from 'react';
import { Button, Dialog, Form, Input } from 'element-react';

class CreateRole extends Component {

    render() {
        const { createRoleData, fnChangeCreateData, fnCreateRole, loginUser } = this.props;
        return (
            <div>
                <Dialog title="Create Role" size="tiny" visible={this.props.showCreateRoleStatus}
                    onCancel={() => this.props.fnCloseCreateRole()}
                    lockScroll={false} >
                    <Dialog.Body>
                        <Form labelWidth="100" className="demo-ruleForm">
                            <Form.Item label="Role Name">
                                <Input type="text" value={createRoleData.name} onChange={(value) => fnChangeCreateData({ "key": "name", "value": value })} />
                            </Form.Item>
                            <Form.Item label="Code">
                                <Input type="text" value={createRoleData.code} onChange={(value) => fnChangeCreateData({ "key": "code", "value": value })} />
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => this.props.fnCloseCreateRole()}>Cancel</Button>
                        <Button type="primary" onClick={() => { fnCreateRole(createRoleData, loginUser) }}>Submit</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}
export default CreateRole;