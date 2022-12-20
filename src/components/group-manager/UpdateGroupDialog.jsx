import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";

class UploadGroupDialog extends Component {
  render() {
    const { closeUpdateGroupDialog, showUpdateGroupDialog, formGroup, updateGroup, fnChangeUpdateData } = this.props;

    return (
      <div>
        <Dialog title="UPDATE USER" size="tiny" visible={showUpdateGroupDialog}
          onCancel={() => closeUpdateGroupDialog()}>
          <Dialog.Body>
            <Form labelPosition="top">
              <Form.Item label="Group Name" labelWidth="100">
                <Input type="text" value={formGroup.groupName} readOnly onChange={(value) => fnChangeUpdateData({"key":"groupName", "value" : value})}></Input>
              </Form.Item>
              <Form.Item label="Description" labelWidth="100">
                <Input type="text" value={formGroup.description} onChange={(value) => fnChangeUpdateData({"key":"description", "value" : value})}></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => closeUpdateGroupDialog()}>Cancel</Button>
            <Button type="primary" onClick={() => updateGroup(formGroup)}>Submit</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default UploadGroupDialog;
