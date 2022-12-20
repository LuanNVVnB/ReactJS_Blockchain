import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";

class ExportFormData extends Component {
    render() {
        const { openExportUserDialog, fnOpenExportUserDialog, exportForm, fnExportFileUser, fnChangeExportUserData } = this.props;
        return (
            <div>
                <Dialog title="Export User" size="small" visible={openExportUserDialog}
                    onCancel={() => fnOpenExportUserDialog(false)}>
                    <Dialog.Body>
                        <Form model="userForm">
                            <Form.Item label="File name" labelWidth="150" autocomplete="off">
                                <Input type="text" value={exportForm.fileName} onChange={(value) => fnChangeExportUserData({ "key": "fileName", "value": value })}></Input>
                            </Form.Item>
                            <Form.Item label="Sheet name" labelWidth="150">
                                <Input type="text" value={exportForm.sheetName} onChange={(value) => fnChangeExportUserData({ "key": "sheetName", "value": value })}></Input>
                            </Form.Item>
                            <Form.Item label="File Type" labelWidth="150">
                                <select class="form-control el-input__inner" value={exportForm.exportType} onChange={(value) => fnChangeExportUserData({ "key": "exportType", "value": value.target.value })}>
                                    <option value="xlsx">XLSX</option>
                                    <option value="xls">XLS</option>
                                    <option value="csv">CSV</option>
                                </select>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => fnOpenExportUserDialog(false)}>Cancel</Button>
                        <Button type="primary" onClick={() => fnExportFileUser(exportForm)}>Submit</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}

export default ExportFormData;
