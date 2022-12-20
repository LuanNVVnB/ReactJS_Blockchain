import './Role.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as roleActions from '../../actions/role/roleActions'
import {
    getAllRole,
    getShowEditMemberStatus,
    getShowCreateRoleStatus,
    getCreateRoleData,
    getEditRoleMemberData,
    getListUser,
    getListGroup,
    getLoginUser,
    listPermission,
    openModalUpdatePermissions,
    roleEditPermistionData
} from '../../reducers/role/index';
import RoleTable from './RoleTable';
import CreateRole from './CreateRole';
import EditRoleMember from './EditRoleMember';
import UpdatePermissions from './UpdatePermissions';

class Role extends Component {

    componentWillMount() {
        const { fnGetAllRole, fnGetListUser, fnGetListGroup, fnGetUser } = this.props;
        fnGetAllRole();
        fnGetListUser();
        fnGetListGroup();
        fnGetUser();
    }

    render() {
        const { roleData, fnEditRoleMember, fnDeleteRole, createRoleData, showCreateRoleStatus,
            editRoleMemberData, showEditMemberStatus, fnCreateRole, fnCloseCreateRole, fnCloseEditRoleMember,
            fnLoadEditRoleMember, listUser, listGroup, fnChangeGroupMember, fnChangeUserMember, fnChangeCreateData, loginUser } = this.props;
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading"  id="setting">
                    <div className="col-lg-12">
                        <h2>Role</h2>
                        <ol id = "setting" className="breadcrumb">
                            <li id = "setting" className="breadcrumb-item">
                                <span>Home</span>
                            </li>
                            <li id = "setting" className="breadcrumb-item">
                                <span>Role</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Role</h4>
                                    <button className="btn btn-primary" onClick={this.props.fnOpenCreateRole.bind(this)}><i class="fa fa-plus-circle"></i> Add</button>
                                    <RoleTable roleData={roleData} loadEditRoleMember={fnLoadEditRoleMember} deleteRole={fnDeleteRole} 
                                    fnLoadEditPermissionUpdate = {this.props.fnLoadEditPermissionUpdate}/>
                                    <CreateRole fnChangeCreateData={fnChangeCreateData} fnCreateRole={fnCreateRole} createRoleData={createRoleData} showCreateRoleStatus={showCreateRoleStatus} fnCloseCreateRole={fnCloseCreateRole} loginUser={loginUser} />
                                    <EditRoleMember fnChangeGroupMember={fnChangeGroupMember} fnChangeUserMember={fnChangeUserMember} listUser={listUser}
                                        listGroup={listGroup} fnEditRoleMember={fnEditRoleMember} editRoleMemberData={editRoleMemberData} showEditMemberStatus={showEditMemberStatus}
                                        fnCloseEditRoleMember={fnCloseEditRoleMember} loginUser={loginUser} />
                                        <UpdatePermissions
                                        openModalUpdatePermissions={this.props.openModalUpdatePermissions}
                                        roleEditPermistionData={this.props.roleEditPermistionData}
                                        listPermission={this.props.listPermission}
                                        fnGetPermissionsByCode={this.props.fnGetPermissionsByCode}
                                        fnsetValuePermission={this.props.fnsetValuePermission}
                                        fnOpenModalUpdatePermissions={this.props.fnOpenModalUpdatePermissions}
                                        fnGetAllPermission={this.props.fnGetAllPermission}
                                        fnEditPermission={this.props.fnEditPermission}
                                    ></UpdatePermissions>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    roleData: getAllRole(state),
    listUser: getListUser(state),
    listGroup: getListGroup(state),
    showEditMemberStatus: getShowEditMemberStatus(state),
    showCreateRoleStatus: getShowCreateRoleStatus(state),
    editRoleMemberData: getEditRoleMemberData(state),
    createRoleData: getCreateRoleData(state),
    loginUser: getLoginUser(state),
    listPermission: listPermission(state),
    openModalUpdatePermissions: openModalUpdatePermissions(state),
    roleEditPermistionData: roleEditPermistionData(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetAllRole: roleActions.fnGetAllRole,
    fnEditRoleMember: roleActions.fnEditRoleMember,
    fnDeleteRole: roleActions.fnDeleteRole,
    fnCreateRole: roleActions.fnCreateRole,
    fnCloseCreateRole: roleActions.fnCloseCreateRole,
    fnCloseEditRoleMember: roleActions.fnCloseEditRoleMember,
    fnOpenCreateRole: roleActions.fnOpenCreateRole,
    fnLoadEditRoleMember: roleActions.fnLoadEditRoleMember,
    fnGetListUser: roleActions.fnGetListUser,
    fnGetListGroup: roleActions.fnGetListGroup,
    fnChangeUserMember: roleActions.fnChangeUserMember,
    fnChangeGroupMember: roleActions.fnChangeGroupMember,
    fnChangeCreateData: roleActions.fnChangeCreateData,
    fnGetUser: roleActions.fnGetUser,

    fnsetValuePermission: roleActions.fnsetValuePermission,
    fnOpenModalUpdatePermissions: roleActions.fnOpenModalUpdatePermissions,
    fnGetAllPermission: roleActions.fnGetAllPermission,
    fnEditPermission: roleActions.fnEditPermission,
    fnLoadEditPermissionUpdate: roleActions.fnLoadEditPermissionUpdate
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Role)