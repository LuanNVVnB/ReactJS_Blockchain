import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";

class ObjectTypeAddForm extends Component {

  render() {
    return (
      <div>
        <Dialog title="Add ObjectType" size="tiny" visible={this.props.openModalAddObjectType}
          onCancel={() => this.props.fnOpenModalAddObjectType(false)}>
          <Dialog.Body>
            <Form>
              <Form.Item label="Code" labelWidth="100">
                <Input type="text" value={this.props.objectType.code} onChange={value => this.props.fnsetValueObjectType({key: 'code', value: value})}></Input>
              </Form.Item>
              <Form.Item label="Name" labelWidth="100">
                <Input type="text" value={this.props.objectType.name} onChange={value => this.props.fnsetValueObjectType({key: 'name', value: value})}></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => this.props.fnOpenModalAddObjectType(false)}>Cancel</Button>
            <Button type="primary" onClick={() => {this.props.fnAddObjectType(this.props.objectType)}}>Submit</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default ObjectTypeAddForm;
