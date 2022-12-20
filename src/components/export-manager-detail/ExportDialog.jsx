import React, { Component } from 'react';
import { Dialog } from "element-react";
import { Trans } from "react-i18next"

class ExportDialog extends Component {
    render() {
        const { fnShowModal, showDialog, exportId, fnSetDataUpdate, dataFormUpdate, fnUpdateExcelDetail } = this.props;
        return (
            <div>
                <Dialog title={<Trans i18nKey={'export.title-detail'} />} size="tiny" visible={showDialog}
                    onCancel={() => fnShowModal(false, '')}>
                    <Dialog.Body>
                        <div className="form-group">
                            <label htmlFor="class-name"><Trans i18nKey={'export.name'} /></label>
                            <input type="text" value={dataFormUpdate.name} className='form-control' readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"><Trans i18nKey={'export.header'} /></label>
                            <input type="text" value={dataFormUpdate.header} onChange={(e) => fnSetDataUpdate({ key: "header", value: e.target.value })} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Entity</label>
                            <input type="text" value={dataFormUpdate.entity} className='form-control' readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"><Trans i18nKey={'export.width'} /></label>
                            <input type="number" value={dataFormUpdate.width} className='form-control' onChange={(e) => fnSetDataUpdate({ key: "width", value: e.target.value })} />
                        </div>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <button className='btn btn-white mr-2' onClick={(e) => fnShowModal(false, '')}><Trans i18nKey={'quiz.cancel'} /></button>
                        <button className='btn btn-primary' type="button" onClick={(e) => fnUpdateExcelDetail(exportId, dataFormUpdate)}><Trans i18nKey={'quiz.submit'} /></button>
                    </Dialog.Footer>
                </Dialog>
            </div >
        )
    }
}

export default ExportDialog;
