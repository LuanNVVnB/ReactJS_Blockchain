import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";
import { Trans } from 'react-i18next';

class CreateGroupDialog extends Component {
  render() {
    const { closeCreateGroupDialog, showCreateGroupDialog, formGroup, createGroup, fnChangeCreateData } = this.props;
    return (
      <div>
        <Dialog title={<Trans i18nKey='GoupsList.popup-add-title' />} size="tiny" visible={showCreateGroupDialog}
          onCancel={() => closeCreateGroupDialog()}>
          <Dialog.Body>
            <Form labelPosition="top">
              <Form.Item label={<Trans i18nKey='GoupsList.thead-name' />} labelWidth="100">
                <Input type="text" value={formGroup.groupName} onChange={(value) => fnChangeCreateData({ "key": "groupName", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey='GoupsList.thead-description' />} labelWidth="100">
                <Input type="text" value={formGroup.description} onChange={(value) => fnChangeCreateData({ "key": "description", "value": value })}></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => closeCreateGroupDialog()}>Cancel</Button>
            <Button type="primary" onClick={() => createGroup(formGroup)}>Add</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default CreateGroupDialog;
