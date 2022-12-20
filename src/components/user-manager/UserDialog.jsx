import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";

class UserDialog extends Component {
  onChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }
  render() {
    const { closeUserDialog, showUserDialog, userForm, createUser } = this.props;
    return (
      <div>
        <Dialog title="User Manager" size="small" visible={showUserDialog}
          onCancel={() => closeUserDialog()}>
          <Dialog.Body>
            <Form model="userForm">
              <Form.Item label="Full name" labelWidth="150" autocomplete="off">
                <Input type="text" value={userForm.fullname} onChange={this.onChange.bind(this, 'fullname')}></Input>
              </Form.Item>
              <Form.Item label="Email" labelWidth="150">
                <Input type="text" value={userForm.email}></Input>
              </Form.Item>
              <Form.Item label="User name" labelWidth="150">
                <Input type="text" value={userForm.username}></Input>
              </Form.Item>
              <Form.Item label="Password" labelWidth="150">
                <Input type="password" value={userForm.password}></Input>
              </Form.Item>
              <Form.Item label="Cornfirm password" labelWidth="150">
                <Input type="password" value={userForm.confirm}></Input>
              </Form.Item>
            </Form>
            {console.log(userForm)}
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => closeUserDialog()}>Cancel</Button>

            <Button type="primary" onClick={() => createUser(userForm)}>Submit</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default UserDialog;
