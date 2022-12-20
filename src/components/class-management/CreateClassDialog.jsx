import React, { Component } from 'react';
import { Dialog } from "element-react";
import { Trans } from 'react-i18next';

class CreateGroupDialog extends Component {
    render() {
        const { fnShowModal, showClassDialog, fnSetDataClass, classDataAdd, fnCreateClass, modalType, classDataUpdate, fnSetDataUpdateClass, fnUpdateClass } = this.props;
        return (
            <div>
                <Dialog title={showClassDialog && modalType === 'add' ? < Trans i18nKey={'class.create'} /> : < Trans i18nKey={'class.update'} />} size="tiny" visible={showClassDialog}
                    onCancel={() => fnShowModal(false, '')}>
                    <Dialog.Body>
                        <div className="form-group">
                            <label htmlFor="class-name"><Trans i18nKey={'class.class-name'} /></label>
                            <input type="text" className='form-control' value={modalType === 'add' ? classDataAdd.className : classDataUpdate.className} onChange={(e) => modalType === 'add' ? fnSetDataClass({ "key": "className", "value": e.target.value }) : fnSetDataUpdateClass({ "key": "className", "value": e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"><Trans i18nKey={'class.numofmember'} /></label>
                            <input type="number" className='form-control' value={modalType === 'add' ? classDataAdd.numOfMember : classDataUpdate.numOfMember} onChange={(e) => modalType === 'add' ? fnSetDataClass({ "key": "numOfMember", "value": e.target.value }) : fnSetDataUpdateClass({ "key": "numOfMember", "value": e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"><Trans i18nKey={'class.description'} /></label>
                            <input type="text" className='form-control' value={modalType === 'add' ? classDataAdd.description : classDataUpdate.description} onChange={(e) => modalType === 'add' ? fnSetDataClass({ "key": "description", "value": e.target.value }) : fnSetDataUpdateClass({ "key": "description", "value": e.target.value })} />
                        </div>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <button className='btn btn-white mr-2' onClick={(e) => fnShowModal(false, '')}><Trans i18nKey={'Button.button-cancel'} /></button>
                        <button className='btn btn-primary' type="button" onClick={(e) => modalType === 'add' ? fnCreateClass(classDataAdd) : fnUpdateClass(classDataUpdate)}><Trans i18nKey={'class.button-add'} /></button>
                    </Dialog.Footer>
                </Dialog>
            </div >
        )
    }
}

export default CreateGroupDialog;
