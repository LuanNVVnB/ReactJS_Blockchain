import React, { Component } from 'react';
import { Dialog, Form, Input, Button, Select } from "element-react";
import { Trans } from 'react-i18next';
class EditMemberMenuForm extends Component {

  render() {
    const {fnToggleEditMemberModel, fnUpdateMenuRoleData, menuRoleUpdate, fnChangeUpdateMenuRoleData, flagEditMemberMenu, roleData}  = this.props;
    return (
      <div>
        <Dialog title={<Trans i18nKey={'MenuList.button-edit-role'} />} size="tiny" visible={flagEditMemberMenu}
          onCancel={() => fnToggleEditMemberModel(false)} closeOnClickModal={false}>
          <Dialog.Body>
            <Form labelPosition="left" labelWidth="100">
            <Form.Item label="Menu ID" labelWidth="80">
                <Input type="text" value={menuRoleUpdate.menuId} disabled></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'MenuList.thead-rode'} />} labelWidth="80">
                <Select value={menuRoleUpdate.roleCodes} multiple={true} onChange={(value) => fnChangeUpdateMenuRoleData({ "key": "roleCodes", "value": value })}>
                  {roleData.map(el => {
                    // if(el !== menuItemNeedEdit.id ){
                    return <Select.Option key={el.id} label={el.code} value={el.code} />
                    // }
                  })}
                </Select>
            </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => fnToggleEditMemberModel(false)}><Trans i18nKey={'MenuList.button-cancel'} /></Button>
            <Button type="primary" onClick={() => fnUpdateMenuRoleData(menuRoleUpdate)}><Trans i18nKey={'Button.button-update'} /></Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default EditMemberMenuForm;
