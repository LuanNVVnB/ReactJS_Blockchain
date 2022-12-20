import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getAllUser,
    getFilter,
    getPaging,
    getShowCreateUserDialog,
    getShowImportFormDialog,
    getShowUpdateUserDialog,
    getTemplate,
    getUserForm,
    getUserFormUpdate,
    // Export file Excel
    openExportUserDialog,
    exportForm,
    getDataExportUser,
    getDataTrash,
    getShowDialogTrash
} from "../../reducers/user-manager";
import * as userManagerActions from '../../actions/user-manager/userManagerActions';
import { Trans, withTranslation } from 'react-i18next';

import ListUser from './ListUser';
import CreateUserDialog from './CreateUserDialog';
import HeaderBox from './HeaderBox';
import UpdateUserDialog from './UpdateUserDialog';
import ImportFormDialog from './ImportFormDialog';
import Paging from './Paging';
import ExportFormData from './ExportFormData';
import ListRemove from './ListRemove';
import ListUserMetamask from './ListUserMetamask';
class UserManager extends Component {
   
    componentDidMount() {
        const { fnFilterUserByUsername, fnResetFilter, fnGetAllUserTrash,fnGetAllUserMetaMask } = this.props;
        fnResetFilter();
        fnFilterUserByUsername();
        fnGetAllUserTrash();
        fnGetAllUserMetaMask();
       
    }
    render() {
        const { showImportFormDialog, showCreateUserDialog, userForm, userData, userFormUpdate, showUpdateUserDialog, userDataTrash, fnShowDialogTrash, showDialogTrash, fnRemoveUserTrash } = this.props;
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading" id="setting">
                    <div className="col-lg-12">
                        <h2><Trans i18nKey={'content.menu-herder-user'} /></h2>
                        <ol id="setting" className="breadcrumb">
                            <li id="setting" className="breadcrumb-item">
                                <span><Trans i18nKey={'content.menu-herder-link-user'} /></span>
                            </li>
                            <li id="setting" className="breadcrumb-item">
                                <span><Trans i18nKey={'content.menu-herder-user'} /></span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"><Trans i18nKey={'content.menu-herder-user'} /></h4>
                                    <hr />
                                    <HeaderBox fnOpenExportUserDialog={this.props.fnOpenExportUserDialog}
                                        paging={this.props.paging} fnSetFilter={this.props.fnSetFilter}
                                        filter={this.props.filter} fnSearch={this.props.fnSearch}
                                        fnExportFileUser={this.props.fnExportFileUser}
                                        fnOpenImportFormDialog={this.props.fnOpenImportFormDialog}
                                        openCreateUserDialog={this.props.fnOpenCreateUserDialog}
                                        fnDownloadTemplate={this.props.fnDownloadTemplate}
                                        fnShowDialogTrash={fnShowDialogTrash}
                                        t={this.props.t} />
                                    <hr />
                                    <ListUser paging={this.props.paging} userData={userData} removeUserByUserName={this.props.fnRemoveUserByName} fnGetUserByUsername={this.props.fnGetUserByUsername} />
                                    <CreateUserDialog paging={this.props.paging} fnChangeCreateData={this.props.fnChangeCreateData} createUser={this.props.fnCreateUser} userForm={userForm} showCreateUserDialog={showCreateUserDialog} closeCreateUserDialog={this.props.fnCloseCreateUserDialog} />
                                    <UpdateUserDialog paging={this.props.paging} fnChangeUpdateData={this.props.fnChangeUpdateData} updateUser={this.props.fnUpdateUser} userFormUpdate={userFormUpdate} showUpdateUserDialog={showUpdateUserDialog} closeUpdateUserDialog={this.props.fnCloseUpdateUserDialog} />
                                    <ImportFormDialog
                                        showImportFormDialog={showImportFormDialog}
                                        fnCloseImportFormDialog={this.props.fnCloseImportFormDialog}
                                        fnDownloadTemplate={this.props.fnDownloadTemplate}
                                        fnFilterUserByUsername={this.props.fnFilterUserByUsername}
                                        fnResetFilter={this.props.fnResetFilter}
                                    />
                                    <ExportFormData
                                        fnFilterUserByUsername={this.props.fnFilterUserByUsername}
                                        openExportUserDialog={this.props.openExportUserDialog}
                                        fnOpenExportUserDialog={this.props.fnOpenExportUserDialog}
                                        exportForm={this.props.exportForm}
                                        fnExportFileUser={this.props.fnExportFileUser}
                                        fnChangeExportUserData={this.props.fnChangeExportUserData}
                                    ></ExportFormData>
                                    <ListRemove userDataTrash={userDataTrash} showDialogTrash={showDialogTrash} fnRemoveUserTrash={fnRemoveUserTrash} fnShowDialogTrash={fnShowDialogTrash} />
                                    <Paging filter={this.props.filter}
                                        fnChangeCurrentPage={this.props.fnChangeCurrentPage}
                                        fnChangePageSize={this.props.fnChangePageSize}
                                        paging={this.props.paging}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <ListUserMetamask />
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    paging: getPaging(state),
    filter: getFilter(state),
    userData: getAllUser(state),
    showCreateUserDialog: getShowCreateUserDialog(state),
    showUpdateUserDialog: getShowUpdateUserDialog(state),
    showImportFormDialog: getShowImportFormDialog(state),
    userForm: getUserForm(state),
    userFormUpdate: getUserFormUpdate(state),
    template: getTemplate(state),
    dataExportUser: getDataExportUser(state),
    // Export file Excel
    openExportUserDialog: openExportUserDialog(state),
    exportForm: exportForm(state),
    getDataExportUser: exportForm(state),
    // Trash
    userDataTrash: getDataTrash(state),
    showDialogTrash: getShowDialogTrash(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnResetFilter: userManagerActions.fnResetFilter,
    fnSearch: userManagerActions.fnSearch,
    fnChangePageSize: userManagerActions.fnChangePageSize,
    fnChangeCurrentPage: userManagerActions.fnChangeCurrentPage,
    fnSetFilter: userManagerActions.fnSetFilter,
    fnFilterUserByUsername: userManagerActions.fnFilterUserByUsername,
    fnRemoveUserByName: userManagerActions.fnRemoveUser,
    fnCloseCreateUserDialog: userManagerActions.fnCloseCreateUserDialog,
    fnOpenCreateUserDialog: userManagerActions.fnOpenCreateUserDialog,
    fnCloseUpdateUserDialog: userManagerActions.fnCloseUpdateUserDialog,
    fnOpenUpdateUserDialog: userManagerActions.fnOpenUpdateUserDialog,
    fnCloseImportFormDialog: userManagerActions.fnCloseImportFormDialog,
    fnOpenImportFormDialog: userManagerActions.fnOpenImportFormDialog,
    fnCreateUser: userManagerActions.fnCreateUser,
    fnUpdateUser: userManagerActions.fnUpdateUser,
    fnChangeUpdateData: userManagerActions.fnChangeUpdateData,
    fnGetUserByUsername: userManagerActions.fnGetUserByUsername,
    fnChangeCreateData: userManagerActions.fnChangeCreateData,
    fnDownloadTemplate: userManagerActions.fnDownloadTemplate,

    // export file excel
    fnExportFileUser: userManagerActions.fnExportFileUser,
    fnOpenExportUserDialog: userManagerActions.fnOpenExportUserDialog,
    fnChangeExportUserData: userManagerActions.fnChangeExportUserData,

    // trash
    fnShowDialogTrash: userManagerActions.fnShowDialogTrash,
    fnGetAllUserTrash: userManagerActions.fnGetAllUserTrash,
    fnRemoveUserTrash: userManagerActions.fnRecoveryUser,
    fnGetAllUserMetaMask: userManagerActions.fnGetAllUserMetaMask

}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(UserManager))
