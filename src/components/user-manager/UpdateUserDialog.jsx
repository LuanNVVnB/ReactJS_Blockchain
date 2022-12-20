import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";
import { Trans } from 'react-i18next';

class UploadUserDialog extends Component {
  render() {
    const { closeUpdateUserDialog, showUpdateUserDialog, userFormUpdate, updateUser, fnChangeUpdateData, paging } = this.props;
    console.log(userFormUpdate)
    return (
      <div>
        <Dialog title={<Trans i18nKey={'UserList.popup-update-user'} />} size="tiny" visible={showUpdateUserDialog}
          onCancel={() => closeUpdateUserDialog()}>
          <Dialog.Body>
            <Form labelPosition="top">
              <Form.Item label={<Trans i18nKey={'UserList.thdead-fullname'} />} labelWidth="80">
                <Input type="text" value={userFormUpdate.fullname} onChange={(value) => fnChangeUpdateData({ "key": "fullname", "value": value })}></Input>
              </Form.Item>
              <Form.Item label="Email" labelWidth="80">
                <Input type="text" value={userFormUpdate.email} onChange={(value) => fnChangeUpdateData({ "key": "email", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-username'} />} labelWidth="80">
                <Input type="text" value={userFormUpdate.username} readOnly onChange={(value) => fnChangeUpdateData({ "key": "username", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-phone'} />} labelWidth="80">
                <Input type="text" value={userFormUpdate.phone} onChange={(value) => fnChangeUpdateData({ "key": "phone", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-password'} />} labelWidth="80">
                <Input type="password" value={userFormUpdate.password} onChange={(value) => { fnChangeUpdateData({ "key": "newPassword", "value": value }); fnChangeUpdateData({ "key": "password", "value": value }) }}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.thdead-conform'} />} labelWidth="80">
                <Input type="password" value={userFormUpdate.confirm} onChange={(value) => fnChangeUpdateData({ "key": "confirm", "value": value })}></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => closeUpdateUserDialog()}><Trans i18nKey={'MenuList.button-cancel'} /></Button>
            <Button type="primary" onClick={() => updateUser(userFormUpdate, paging)}><Trans i18nKey={'Button.button-add'} /></Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default UploadUserDialog;
