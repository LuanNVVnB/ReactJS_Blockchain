import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFilter, getAllGroup, getShowCreateGroupDialog, getFormGroup, getShowUpdateGroupDialog, getShowUserGroupDialog, getAllUser, selectdirectoryId, selectGroupName, getFormUserGroup } from "../../reducers/group-manager";
import * as groupManagerActions from '../../actions/group-manager/groupManagerActions';
import ListGroup from './ListGroup';
import HeaderBox from './HeaderBox';
import CreateGroupDialog from './CreateGroupDialog';
import UpdateGroupDialog from './UpdateGroupDialog';
import EditUserInGroupDialog from './EditUserInGroupDialog';
import { Trans, withTranslation } from 'react-i18next';
class GroupManager extends Component {
    componentWillMount() {
        const { fnGetAllGroup, filter } = this.props;
        fnGetAllGroup(filter);
    }

    render() {
        const { formUserGroup, groupData, showCreateGroupDialog, formGroup, showUpdateGroupDialog, userData, showUserGroupDialog, selectGroupName, selectdirectoryId } = this.props;
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading" id="setting">
                    <div className="col-lg-12">
                        <h2>< Trans i18nKey={'content.menu-herder-Group'} /></h2>
                        <ol id="setting" className="breadcrumb">
                            <li id="setting" className="breadcrumb-item">
                                <span>< Trans i18nKey={'content.menu-herder-link-user'} /></span>
                            </li>
                            <li id="setting" className="breadcrumb-item">
                                <span>< Trans i18nKey={'content.menu-herder-Group'} /></span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">< Trans i18nKey={'content.menu-herder-Group'} /></h4>
                                    <hr />
                                    <HeaderBox fnOpenCreateGroupDialog={this.props.fnOpenCreateGroupDialog} fnGetAllGroup={this.props.fnGetAllGroup} fnSetFilter={this.props.fnSetFilter} filter={this.props.filter}></HeaderBox>
                                    <hr />
                                    <ListGroup groupData={groupData} fnRemoveGroup={this.props.fnRemoveGroup} fnGetGroupByGroupname={this.props.fnGetGroupByGroupname} fnEditGroupUser={this.props.fnEditGroupUser}></ListGroup>
                                    <UpdateGroupDialog formGroup={formGroup} fnChangeUpdateData={this.props.fnChangeUpdateData} updateGroup={this.props.fnUpdateGroup} showUpdateGroupDialog={showUpdateGroupDialog} closeUpdateGroupDialog={this.props.fnCloseUpdateGroupDialog}></UpdateGroupDialog>
                                    <CreateGroupDialog fnChangeCreateData={this.props.fnChangeCreateData} createGroup={this.props.fnCreateGroup} formGroup={formGroup} showCreateGroupDialog={showCreateGroupDialog} closeCreateGroupDialog={this.props.fnCloseCreateGroupDialog}></CreateGroupDialog>
                                    <EditUserInGroupDialog groupData={groupData} formGroup={formGroup} userData={userData} showUserGroupDialog={showUserGroupDialog} selectGroupName={selectGroupName} selectdirectoryId={selectdirectoryId} formUserGroup={formUserGroup}
                                        fnCloseUserGroupDialog={this.props.fnCloseUserGroupDialog} fnAddUserToGroup={this.props.fnAddUserToGroup} fnInitDataUser={this.props.fnInitDataUser} fnLoadGroupUser={this.props.fnLoadGroupUser} fnRemoveUserInGroup={this.props.fnRemoveUserInGroup}
                                        fnChangeUserMember={this.props.fnChangeUserMember}></EditUserInGroupDialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    groupData: getAllGroup(state),
    showCreateGroupDialog: getShowCreateGroupDialog(state),
    formGroup: getFormGroup(state),
    showUpdateGroupDialog: getShowUpdateGroupDialog(state),
    filter: getFilter(state),
    //edit user in group
    userData: getAllUser(state),
    showUserGroupDialog: getShowUserGroupDialog(state),
    selectGroupName: selectGroupName(state),
    selectdirectoryId: selectdirectoryId(state),
    formUserGroup: getFormUserGroup(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetAllGroup: groupManagerActions.fnGetAllGroup,
    fnChangeCreateData: groupManagerActions.fnChangeCreateData,
    fnCloseCreateGroupDialog: groupManagerActions.fnCloseCreateGroupDialog,
    fnOpenCreateGroupDialog: groupManagerActions.fnOpenCreateGroupDialog,
    fnCreateGroup: groupManagerActions.fnCreateGroup,
    fnRemoveGroup: groupManagerActions.fnRemoveGroup,
    fnUpdateGroup: groupManagerActions.fnUpdateGroup,
    fnChangeUpdateData: groupManagerActions.fnChangeUpdateData,
    fnCloseUpdateGroupDialog: groupManagerActions.fnCloseUpdateGroupDialog,
    fnOpenUpdateGroupDialog: groupManagerActions.fnOpenUpdateGroupDialog,
    fnGetGroupByGroupname: groupManagerActions.fnGetGroupByGroupname,
    fnSetFilter: groupManagerActions.fnSetFilter,
    //edit user in group
    fnCloseUserGroupDialog: groupManagerActions.fnCloseUserGroupDialog,
    fnOpenUserGroupDialog: groupManagerActions.fnOpenUserGroupDialog,
    fnAddUserToGroup: groupManagerActions.fnAddUserToGroup,
    fnInitDataUser: groupManagerActions.fnInitDataUser,
    fnEditGroupUser: groupManagerActions.fnEditGroupUser,
    fnLoadGroupUser: groupManagerActions.fnLoadGroupUser,
    fnRemoveUserInGroup: groupManagerActions.fnRemoveUserInGroup,
    fnChangeUserMember: groupManagerActions.fnChangeUserMember,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(GroupManager))