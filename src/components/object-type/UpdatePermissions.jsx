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
                                <Select value={this.props.editPermistionData.perCode} multiple={true} onChange={(value) => this.props.fnsetValuePermission({ "key": "perCode", "value": value })}>
                                    {this.props.listPermission.map(el => {
                                        return <Select.Option key={el.code} label={el.name} value={el.code} />
                                    })}
                                </Select>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => this.props.fnOpenModalUpdatePermissions(false)}>Cancel</Button>
                        <Button type="primary" onClick={() => { this.props.fnEditPermission(this.props.editPermistionData.objCode, this.props.editPermistionData.perCode) }}>Submit</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}

export default UpdatePermissions;
