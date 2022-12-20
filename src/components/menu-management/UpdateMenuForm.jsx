import React, { Component } from 'react';
import { Dialog, Form, Button, Input, Checkbox, Upload, Message } from "element-react";
import * as $http from '../../utils/httpProvider';
import * as CONFIG from '../../config/configUrl';
import { Trans } from 'react-i18next';

class UpdateMenuForm extends Component {

  handleAvatarScucess(res, file) {
    let iconUrl = res.data.url;
    if (iconUrl !== null){
      this.props.fnChangeUpdateMenuData({"key":"imageIcon", "value" : iconUrl});
    } 
  }

  beforeAvatarUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isLt2M) {
      Message('Icon picture size can not exceed 2MB!');
    }
    return isLt2M;
  }

  render() {
    const {fnToggleUpdateModel, fnUpdateMenuData, menuData, menuItemNeedEdit, fnChangeUpdateMenuData}  = this.props;
    return (
      <div>
        <Dialog title={<Trans i18nKey={'MenuList.popup-update-menu'} />} size="tiny" visible={this.props.flagUpdateMenu}
          onCancel={() => fnToggleUpdateModel(false)} closeOnClickModal={false}>
          <Dialog.Body>
            <Form labelPosition="left" labelWidth="100">
              <Form.Item label={<Trans i18nKey={'MenuList.thead-name'} />} labelWidth="80">
                <Input type="text" value={menuItemNeedEdit.name} onChange={(value) => fnChangeUpdateMenuData({ "key": "name", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'MenuList.thead-parentId'} />} labelWidth="80">
                {/* <Select value={menuItemNeedEdit.parentId} onChange={(value) => fnChangeUpdateMenuData({"key":"parentId", "value" : value})}>
                    <Select.Option key={0} label=" " value={null}/>
                    {menuData.map(el => {
                        if(el.id !== menuItemNeedEdit.id ){
                          return <Select.Option key={el.id} label={el.name} value={el.id} />
                        }
                    })}
                </Select> */}
                <select className="form-control el-input__inner" value={menuItemNeedEdit.parentId} onChange={(value) => fnChangeUpdateMenuData({"key":"parentId", "value" : value.target.value})}>
                  <option value={null}> </option>
                  {menuData.map(el => {
                      return <option key={el.id} value={el.id}>{el.name}</option>
                    })}
                </select>
              </Form.Item>
              <Form.Item label="URL" labelWidth="80">
                <Input type="text" value={menuItemNeedEdit.url} onChange={(value) => fnChangeUpdateMenuData({ "key": "url", "value": value })}></Input>
              </Form.Item>
              <Form.Item label="Icon" labelWidth="80">
                <Input type="text" value={menuItemNeedEdit.icon} onChange={(value) => fnChangeUpdateMenuData({ "key": "icon", "value": value })}></Input>
              </Form.Item>
              <Form.Item label={<Trans i18nKey={'UserList.image'} />} labelWidth="80">
                <Input type="text" value={menuItemNeedEdit.imageIcon} onChange={(value) => fnChangeUpdateMenuData({ "key": "imageIcon", "value": value })}
                  append={
                    <Upload className="icon-uploader" action={CONFIG.API_BASE_URL + "/v1/rest/upload"} showFileList={false}
                      onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
                      beforeUpload={file => this.beforeAvatarUpload(file)}
                      headers={$http.getAuthenHeader()}
                    >
                      {menuItemNeedEdit.imageIcon ? <img src={menuItemNeedEdit.imageIcon} alt="icon" className="image-icon" style={{ width: "34px", height: "34px" }} /> : <i className="el-icon-plus avatar-uploader-icon"></i>}
                    </Upload>
                  } />
              </Form.Item>
              <Form.Item label="Enable" labelWidth="80">
                <Checkbox checked={menuItemNeedEdit.enable} value={menuItemNeedEdit.enable} onChange={(value) => fnChangeUpdateMenuData({ "key": "enable", "value": value })} />
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => fnToggleUpdateModel(false)}><Trans i18nKey={'MenuList.button-cancel'} /> </Button>
            <Button type="primary" onClick={() => fnUpdateMenuData(menuItemNeedEdit)}><Trans i18nKey={'Button.button-update'} /> </Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

export default UpdateMenuForm;
