import React, { Component } from 'react';
import { Dialog, Form, Button, Select } from "element-react";

class UpdatePermissions extends Component {
    componentWillMount() {
        this.props.fnGetAllPermission();
    }
    render() {
        return (
            <div>
                <Dialog title="Edit Permission" size="tiny" visible={this.props.openModalUpdatePermissions}
                    onCancel={() => this.props.fnOpenModalUpdatePermissions(false)}>
                    <Dialog.Body>
                        <Form>
                            <Form.Item label="Permission" labelWidth="100">
                                <Select value={this.props.roleEditPermistionData.permissionId} multiple={true} onChange={(value) => this.props.fnsetValuePermission({ "key": "permissionId", "value": value })}>
                                    {this.props.listPermission.map(el => {
                                        if (el !== null && el.PermissionType !== undefined && el.ObjectType !== undefined && el.PermissionType !== null && el.ObjectType !== null) {
                                            return <Select.Option key={el.id} label={el.PermissionType.name + ' - ' + el.ObjectType.name} value={el.id} />
                                        }
                                    })}
                                </Select>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => this.props.fnOpenModalUpdatePermissions(false)}>Cancel</Button>
                        <Button type="primary" onClick={() => { this.props.fnEditPermission(this.props.roleEditPermistionData.code, this.props.roleEditPermistionData.permissionId) }}>Submit</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}

export default UpdatePermissions;
