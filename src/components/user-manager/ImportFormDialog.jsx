import React, { Component } from 'react';
import { Dialog, Button, Upload } from "element-react";
import * as CONFIG from '../../config/configUrl'
import * as $http from "../../utils/httpProvider";
import { Notification } from "element-react";
class ImportFormDialog extends Component {
    submitUpload() {
        this.refs.upload.submit();
    }
    render() {
        const uploadURL = CONFIG.API_BASE_URL + "/rest/import-user";
        const { showImportFormDialog, fnCloseImportFormDialog, fnDownloadTemplate, fnFilterUserByUsername, fnResetFilter } = this.props;
        return (
            <div>
                <Dialog title="IMPORT USER" size="tiny" visible={showImportFormDialog} onCancel={() => fnCloseImportFormDialog()}>
                    <Dialog.Body>
                        <span>
                            Upload the <b>.xls</b> or <b>.xlsx</b> to import users. <br></br>
                            You may download template here: &nbsp;
                            <Button size="mini" onClick={() => fnDownloadTemplate()}><i className="fa fa-file-excel-o"></i> Template</Button>
                        </span>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Upload
                            className="upload-demo"
                            ref="upload"
                            action={uploadURL}
                            onSuccess={() => {
                                Notification({
                                    title: 'Success',
                                    message: 'Import user success',
                                    type: 'success'
                                }); fnFilterUserByUsername(); fnResetFilter(); fnCloseImportFormDialog()
                            }}
                            autoUpload={false}
                            headers={$http.getAuthenHeader()}
                            accept=" .xlsx, .xls"
                            tip={<div className="el-upload__tip">Choose a file with the <b>.xls</b> or <b>.xlsx</b></div>}
                            trigger={<Button size="small" type="primary">Select file</Button>}
                        >
                            <Button style={{ marginLeft: '10px' }} size="small" type="success"
                                onClick={() => this.submitUpload()} >Import</Button>
                        </Upload>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}

export default ImportFormDialog;
