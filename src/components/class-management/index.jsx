import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classManagerAction from '../../actions/class-manager/classManagerAction';
import { fnExportExcel } from '../../actions/export-manager/exportManagerAction';
import ListClass from './ListClass';
import { getClassManagement, showClassDialog, getFilter, getPaging, getClassDataAdd, showClassDialogType, getClassDataUpdate, showClassRemove, getClassDataRemove, getDataSearch } from '../../reducers/class-management';
import HeaderBox from './HeaderBox';
import CreateClassDialog from './CreateClassDialog';
import ListRemove from './ListRemove';
import Paging from '../user-manager/Paging';
import { Trans, withTranslation } from 'react-i18next';


class ClassManagement extends Component {
    componentDidMount() {
        const { fnGetAllClass, fnGetAllClassRemove } = this.props;
        fnGetAllClass();
        fnGetAllClassRemove();
    }

    render() {
        const { classData, fnDeleteClass, showClassDialog, fnShowModal, fnSetDataClass, classDataAdd, fnCreateClass,
            showClassDialogType, classDataUpdate, fnSetDataUpdateClass, fnUpdateClass, fnShowClassRemove, showClassRemove, fnExportExcel,
            classDataRemove, fnRecoverClassRemove, fnChangeCurrentPage, fnChangePageSize, paging, filter, search, fnSearch, fnGetAllClass } = this.props;
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-12">
                        <h2><Trans i18nKey={'class.header'} /></h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span><Trans i18nKey={'content.menu-herder-link-user'} /></span>
                            </li>
                            <li className="breadcrumb-item">
                                <span><Trans i18nKey={'class.header'} /></span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"><Trans i18nKey={'class.header'} /></h4>
                                    <HeaderBox fnExportExcel={fnExportExcel} fnGetAllClass={fnGetAllClass} fnSearch={fnSearch} search={search} fnShowModal={fnShowModal} fnShowClassRemove={fnShowClassRemove} t={this.props.t} />
                                    <hr />
                                    <ListClass fnShowModal={fnShowModal} classData={classData} fnDeleteClass={fnDeleteClass} />
                                    <CreateClassDialog showClassDialog={showClassDialog} fnShowModal={fnShowModal} classDataUpdate={classDataUpdate} classDataAdd={classDataAdd} fnSetDataClass={fnSetDataClass} fnCreateClass={fnCreateClass} modalType={showClassDialogType} fnSetDataUpdateClass={fnSetDataUpdateClass} fnUpdateClass={fnUpdateClass} />
                                    <ListRemove fnRecoverClassRemove={fnRecoverClassRemove} classDataRemove={classDataRemove} showClassRemove={showClassRemove} fnShowClassRemove={fnShowClassRemove} />
                                    <Paging filter={filter} fnChangeCurrentPage={fnChangeCurrentPage} fnChangePageSize={fnChangePageSize} paging={paging}
                                    />
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
    paging: getPaging(state),
    filter: getFilter(state),
    search: getDataSearch(state),
    classData: getClassManagement(state),
    showClassDialog: showClassDialog(state),
    showClassDialogType: showClassDialogType(state),
    classDataAdd: getClassDataAdd(state),
    classDataUpdate: getClassDataUpdate(state),
    showClassRemove: showClassRemove(state),
    classDataRemove: getClassDataRemove(state)

});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetAllClass: classManagerAction.fnGetAllClass,
    fnDeleteClass: classManagerAction.fnDeleteClass,
    fnSetDataClass: classManagerAction.fnSetDataClass,
    fnSetDataUpdateClass: classManagerAction.fnSetDataUpdateClass,
    fnShowModal: classManagerAction.fnClassModalDialog,
    fnCreateClass: classManagerAction.fnAddClass,
    fnUpdateClass: classManagerAction.fnUpdateClass,
    fnShowClassRemove: classManagerAction.fnShowClassRemove,
    fnGetAllClassRemove: classManagerAction.fnGetAllClassRemove,
    fnRecoverClassRemove: classManagerAction.fnRecoverClassRemove,
    fnChangePageSize: classManagerAction.fnChangePageSize,
    fnChangeCurrentPage: classManagerAction.fnChangeCurrentPage,
    fnSetFilter: classManagerAction.fnSetFilter,
    fnSearch: classManagerAction.fnSetDataSearch,
    fnExportExcel: fnExportExcel

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ClassManagement));