import React, { Component } from 'react';
import { Trans } from 'react-i18next';



class HeaderBox extends Component {
    render() {
        const { t } = this.props;

        const { paging, fnSetFilter, filter, fnSearch, openCreateUserDialog, fnOpenImportFormDialog, fnOpenExportUserDialog, fnShowDialogTrash } = this.props;
        return (
            <div>
                <div>
                    <div className="d-flex mt-1">
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={openCreateUserDialog}><i className="fa fa-plus-circle"></i> <Trans i18nKey={'UserList.button-add'} /></button>
                        </div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={() => fnOpenExportUserDialog(true)}><i className="fa fa-file-excel-o"></i> <Trans i18nKey={'UserList.button-export'} /></button>
                        </div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={() => fnOpenImportFormDialog()}><i className="fa fa-file-excel-o"></i>  <Trans i18nKey={'UserList.button-import'} /></button>
                        </div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={() => fnShowDialogTrash(true)}><i className="fa fa-trash-o"></i>  <Trans i18nKey={'UserList.button-trash'} /></button>
                        </div>
                        <div className="btn-group btn-sm ml-auto mr-2">
                        </div>
                        <div className="btn-group btn-sm border-0">
                            <input type="hidden" className="form-control" id="txtId" />
                            <input type="text" className="form-control" placeholder={t('Dashboard.search')} value={filter} id="txtSearchUsername" onChange={value => fnSetFilter(value.currentTarget.value)} /></div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={() => fnSearch(filter, paging)}><i className="fa fa-search"></i></button>
                        </div>

                    </div>
                </div>
            </div>
        );
    };
}

export default HeaderBox;
