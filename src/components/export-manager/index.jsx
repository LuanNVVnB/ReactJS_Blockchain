import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import ListEntity from './ListEntity';
import * as exportManagerAction from '../../actions/export-manager/exportManagerAction';
import { getExportManager } from '../../reducers/export-manager';
import { Trans, withTranslation } from 'react-i18next';
class ExportManager extends Component {
    componentDidMount() {
        const { fnGetAllExport } = this.props;
        fnGetAllExport();
    }

    render() {
        const { dataExport, fnExportExcel } = this.props;
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
                                    <ListEntity exportData={dataExport} fnExportExcel={fnExportExcel} />
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
    dataExport: getExportManager(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetAllExport: exportManagerAction.fnGetAllExport,
    fnExportExcel: exportManagerAction.fnExportExcel

}, dispatch);

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ExportManager)));