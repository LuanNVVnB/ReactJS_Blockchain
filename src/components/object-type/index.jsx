import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ObjectType.css';
import * as objectTypeActions from '../../actions/object-type/objectTypeActions';
import {
    objectType,
    getAllObjectType,
    openModalAddObjectType,
    openModalUpdateObjectType,
    getObjectTypeById,
    objectTypeUpdate,
    
    listPermission,
    openModalUpdatePermissions,
    editPermistionData
} from "../../reducers/object-type";

import ObjectTypeTable from './ObjectTypeTable';
import ObjectTypeAddForm from './ObjectTypeAddForm';
import ObjectTypeUpdateForm from './ObjectTypeUpdateForm';
import UpdatePermissions from './UpdatePermissions';

class ObjectType extends Component {

    componentWillMount() {
        this.props.fnGetAllObjectType();
    }

    render() {
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading"  id="setting">
                    <div className="col-lg-12">
                        <h2>Object Type</h2>
                        <ol id = "setting" className="breadcrumb">
                            <li id = "setting" className="breadcrumb-item">
                                <span>Home</span>
                            </li>
                            <li id = "setting" className="breadcrumb-item">
                                <span>Object Type</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Object Type</h4>
                                    <ObjectTypeAddForm fnAddObjectType={this.props.fnAddObjectType} fnsetValueObjectType={this.props.fnsetValueObjectType} fnGetAllObjectTypeByObjType={this.props.fnGetAllObjectTypeByObjType} listObjectType={this.props.listObjectType} objectTypes={this.props.objectTypes} roles={this.props.roles} objectType={this.props.objectType} fnOpenModalAddObjectType={this.props.fnOpenModalAddObjectType} openModalAddObjectType={this.props.openModalAddObjectType} />
                                    <button className="btn btn-primary" onClick={() => this.props.fnOpenModalAddObjectType(true)}><i class="fa fa-plus-circle"></i> Add</button>
                                    <ObjectTypeTable
                                        fnGetObjectTypesById={this.props.fnGetObjectTypesById}
                                        fnDeleteObjectType={this.props.fnDeleteObjectType}
                                        objectTypes={this.props.objectTypes}
                                        fnLoadEditPermissionUpdate={this.props.fnLoadEditPermissionUpdate} />
                                    <ObjectTypeUpdateForm
                                        fnOpenModalUpdateObjectType={this.props.fnOpenModalUpdateObjectType}
                                        openModalUpdateObjectType={this.props.openModalUpdateObjectType}
                                        getObjectTypeById={this.props.getObjectTypeById}
                                        fnsetValueUpdateObjectType={this.props.fnsetValueUpdateObjectType}
                                        objectTypeUpdate={this.props.objectTypeUpdate}
                                        fnSetValueUpdateObjectType={this.props.fnSetValueUpdateObjectType}
                                        fnUpdateObjectType={this.props.fnUpdateObjectType}></ObjectTypeUpdateForm>
                                    <UpdatePermissions
                                        openModalUpdatePermissions={this.props.openModalUpdatePermissions}
                                        editPermistionData={this.props.editPermistionData}
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
    objectTypes: getAllObjectType(state),
    objectType: objectType(state),
    openModalAddObjectType: openModalAddObjectType(state),
    openModalUpdateObjectType: openModalUpdateObjectType(state),
    getObjectTypeById: getObjectTypeById(state),
    objectTypeUpdate: objectTypeUpdate(state),
    listPermission: listPermission(state),
    openModalUpdatePermissions: openModalUpdatePermissions(state),
    editPermistionData: editPermistionData(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetAllObjectType: objectTypeActions.fnGetAllObjectType,
    fnDeleteObjectType: objectTypeActions.fnDeleteObjectType,
    fnsetValueObjectType: objectTypeActions.fnsetValueObjectType,
    fnAddObjectType: objectTypeActions.fnAddObjectType,
    fnOpenModalAddObjectType: objectTypeActions.fnOpenModalAddObjectType,
    fnGetObjectTypesById: objectTypeActions.fnGetObjectTypesById,
    fnOpenModalUpdateObjectType: objectTypeActions.fnOpenModalUpdateObjectType,
    fnSetValueUpdateObjectType: objectTypeActions.fnSetValueUpdateObjectType,
    fnUpdateObjectType: objectTypeActions.fnUpdateObjectType,
    fnLoadEditPermissionUpdate: objectTypeActions.fnLoadEditPermissionUpdate,
    fnsetValuePermission: objectTypeActions.fnsetValuePermission,
    fnOpenModalUpdatePermissions: objectTypeActions.fnOpenModalUpdatePermissions,
    fnGetAllPermission: objectTypeActions.fnGetAllPermission,
    fnEditPermission: objectTypeActions.fnEditPermission
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ObjectType)