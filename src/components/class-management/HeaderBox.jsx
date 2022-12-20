import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class HeaderBox extends Component {
    render() {
        const { t } = this.props;
        const { fnExportExcel, fnShowModal, fnGetAllClass, fnShowClassRemove, fnSearch, search } = this.props;
        return (
            <div>
                <div>
                    <div className="d-flex mt-1">
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={(e) => fnShowClassRemove(true)} ><i className="fa fa-trash-o"></i> <Trans i18nKey={'class.trash'} /> </button>
                        </div>
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={(e) => fnExportExcel('Class', 'class')} ><i className="fa fa-file-excel-o"></i>  <Trans i18nKey={'class.export'} /> </button>
                        </div>
                        <div className="btn-group btn-sm ml-auto mr-2">
                        </div>
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={(e) => fnShowModal(true, 'add')} ><i className="fa fa-plus-circle"></i> <Trans i18nKey={'class.button-add'} /> </button>
                        </div>
                        <div className="btn-group btn-sm border-0">
                            <input type="hidden" className="form-control" id="txtId" />
                            <input type="text" className="form-control" placeholder={t('Dashboard.search')} value={search} onChange={(e) => fnSearch(e.target.value)} /></div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={(e) => fnGetAllClass(search)}><i className="fa fa-search" ></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default HeaderBox;
