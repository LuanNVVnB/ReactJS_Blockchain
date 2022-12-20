import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";

class ObjectTypeUpdateForm extends Component {

  render() {
    return (
      <div>
        <Dialog title="Edit ObjectType" size="tiny" visible={this.props.openModalUpdateObjectType}
          onCancel={() => this.props.fnOpenModalUpdateObjectType(false)}>
          <Dialog.Body>
            <Form>
              <Form.Item label="Code" labelWidth="100">
                <Input type="text" disabled={true} value={this.props.objectTypeUpdate.code} onChange={value => this.props.fnSetValueUpdateObjectType({key: 'code', value: value})}></Input>
              </Form.Item>
              <Form.Item label="Name" labelWidth="100">
                <Input type="text" value={this.props.objectTypeUpdate.name} onChange={value => this.props.fnSetValueUpdateObjectType({key: 'name', value: value})}></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => this.props.fnOpenModalUpdateObjectType(false)}>Cancel</Button>
            <Button type="primary" onClick={() => {this.props.fnUpdateObjectType(this.props.objectTypeUpdate, this.props.user)}}>Submit</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default ObjectTypeUpdateForm;
