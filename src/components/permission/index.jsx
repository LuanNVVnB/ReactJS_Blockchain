import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Permission.css';
import * as permissionActions from '../../actions/permission/permissionActions';
import {
    permission,
    getAllPermission,
    openModalAddPermission,
} from "../../reducers/permission";

import PermissionTable from './PermissionTable';
import PermissionAddForm from './PermissionAddForm';


class Permission extends Component {

    componentWillMount() {
        this.props.fnGetAllPermission();
    }

    render() {
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading"  id="setting">
                    <div className="col-lg-12">
                        <h2>Permission Type</h2>
                        <ol id = "setting" className="breadcrumb">
                            <li id = "setting" className="breadcrumb-item">
                                <span>Home</span>
                            </li>
                            <li id = "setting" className="breadcrumb-item">
                                <span>Permission Type</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Permission Type</h4>
                                    <PermissionAddForm user={this.props.user} fnAddPermission={this.props.fnAddPermission} fnsetValuePermission={this.props.fnsetValuePermission} fnGetAllPermissionByObjType={this.props.fnGetAllPermissionByObjType} listPermission={this.props.listPermission} objectTypes={this.props.objectTypes} roles={this.props.roles} permission={this.props.permission} fnOpenModalAddPermission={this.props.fnOpenModalAddPermission} openModalAddPermission={this.props.openModalAddPermission} />
                                    <button className="btn btn-primary" onClick={() => this.props.fnOpenModalAddPermission(true)}><i class="fa fa-plus-circle"></i> Add</button>
                                    <PermissionTable fnDeletePermission={this.props.fnDeletePermission} permissions={this.props.permissions} />
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
    permission: permission(state),
    permissions: getAllPermission(state),
    openModalAddPermission: openModalAddPermission(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetAllPermission: permissionActions.fnGetAllPermission,
    fnDeletePermission: permissionActions.fnDeletePermission,
    fnsetValuePermission: permissionActions.fnsetValuePermission,
    fnAddPermission: permissionActions.fnAddPermission,
    fnOpenModalAddPermission: permissionActions.fnOpenModalAddPermission,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Permission)