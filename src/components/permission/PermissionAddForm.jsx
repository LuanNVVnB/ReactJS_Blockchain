import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";

class PermissionAddForm extends Component {

  render() {
    return (
      <div>
        <Dialog title="Add Permission" size="tiny" visible={this.props.openModalAddPermission}
          onCancel={() => this.props.fnOpenModalAddPermission(false)}>
          <Dialog.Body>
            <Form>
              <Form.Item label="Code" labelWidth="100">
                <Input type="text" value={this.props.permission.code} onChange={value => this.props.fnsetValuePermission({key: 'code', value: value})}></Input>
              </Form.Item>
              <Form.Item label="Name" labelWidth="100">
                <Input type="text" value={this.props.permission.name} onChange={value => this.props.fnsetValuePermission({key: 'name', value: value})}></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => this.props.fnOpenModalAddPermission(false)}>Cancel</Button>
            <Button type="primary" onClick={() => {this.props.fnAddPermission(this.props.permission, this.props.user)}}>Submit</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default PermissionAddForm;
