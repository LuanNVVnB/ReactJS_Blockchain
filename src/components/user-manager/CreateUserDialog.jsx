import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";
import { Trans } from 'react-i18next';

class CreateUserDialog extends Component {
  render() {
    const { closeCreateUserDialog, showCreateUserDialog, userForm, createUser, fnChangeCreateData, paging } = this.props;
    return (
      <div>
        <Dialog title={<Trans i18nKey={'UserList.popup-create-user'} />} size="tiny" visible={showCreateUserDialog}
          onCancel={() => closeCreateUserDialog()}>
          <Dialog.Body>
            <Form labelPosition="top">
              <Form.Item label={<Trans i18nKey={'UserList.thdead-fullname'} />} labelWidth="150">
                <Input type="text" value={userForm.fullname} onChange={(value) => fnChangeCreateData({ "key": "fullname", "value": value })}></Input>
              </Form.Item>
              <Form.Item label="Email" labelWidth="150">
                <Input type="text" value={userForm.email} onChange={(value) => fnChangeCreateData({ "key": "email", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-username'} />} labelWidth="150">
                <Input type="text" value={userForm.username} onChange={(value) => fnChangeCreateData({ "key": "username", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-phone'} />} labelWidth="150">
                <Input type="text" value={userForm.phone} onChange={(value) => fnChangeCreateData({ "key": "phone", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-password'} />} labelWidth="150">
                <Input type="password" value={userForm.password} onChange={(value) => fnChangeCreateData({ "key": "password", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-conform'} />} labelWidth="150">
                <Input type="password" value={userForm.confirm} onChange={(value) => fnChangeCreateData({ "key": "confirm", "value": value })}></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => closeCreateUserDialog()}><Trans i18nKey={'MenuList.button-cancel'} /></Button>

            <Button type="primary" onClick={() => createUser(userForm, paging)}><Trans i18nKey={'Button.button-add'} /></Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default CreateUserDialog;
