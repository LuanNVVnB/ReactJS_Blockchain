import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import EntityDetail from './EntityDetail';
import HeaderBox from './HeaderBox';
import ExportDialog from './ExportDialog';
import * as exportManagerAction from '../../actions/export-manager/exportManagerAction';
import { getExportByName, getDialogExport, getDataExportUpdate, getFormUpdate } from '../../reducers/export-manager';
import { Trans, withTranslation } from 'react-i18next';
class ExportDetail extends Component {
    componentDidMount() {
        const exportId = this.props.location.search.split('?code=')[1];
        const { fnGetExportByName } = this.props;
        fnGetExportByName(exportId);
    }

    render() {
        const { dataExportByName, fnChangeLevelExcel, fnShowDialog, dialogExport, dataExportUpdate, fnSetDataUpdate, dataFormUpdate, fnUpdateExcelDetail } = this.props;
        const exportId = this.props.location.search.split('?code=')[1];
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-12">
                        <h2><Trans i18nKey={'export.title'} /></h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span><Trans i18nKey={'export.home'} /></span>
                            </li>
                            <li className="breadcrumb-item">
                                <span><Trans i18nKey={'export.title'} /></span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"><Trans i18nKey={'export.title'} /></h4>
                                    <HeaderBox />
                                    <ExportDialog exportId={exportId} fnSetDataUpdate={fnSetDataUpdate} fnShowModal={fnShowDialog} showDialog={dialogExport} dataExportUpdate={dataExportUpdate} dataFormUpdate={dataFormUpdate} fnUpdateExcelDetail={fnUpdateExcelDetail} />
                                    <EntityDetail fnChangeLevelExcel={fnChangeLevelExcel} dataExportByName={dataExportByName} fnShowModal={fnShowDialog} />
                                    <hr />
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
    dataExportByName: getExportByName(state),
    dialogExport: getDialogExport(state),
    dataExportUpdate: getDataExportUpdate(state),
    dataFormUpdate: getFormUpdate(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetExportByName: exportManagerAction.fnGetExportByName,
    fnChangeLevelExcel: exportManagerAction.fnChangeLevelExcel,
    fnShowDialog: exportManagerAction.fnShowDialog,
    fnSetDataUpdate: exportManagerAction.fnSetDataUpdate,
    fnUpdateExcelDetail: exportManagerAction.fnUpdateExcelDetail

}, dispatch);

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ExportDetail)));