import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class HeaderBox extends Component {
    render() {
        const { fnOpenCreateGroupDialog, fnGetAllGroup, fnSetFilter, filter } = this.props;
        return (
            <div>
                <div>
                    <div className="d-flex mt-2">
                        <div className="btn-group mr-2 btn-sm">
                            <button className="btn btn-primary" onClick={fnOpenCreateGroupDialog}><i className="fa fa-plus-circle"></i> < Trans i18nKey={'UserList.button-add'} /></button>
                        </div>
                        <div className="btn-group btn-sm ml-auto mr-2">
                        </div>
                        <div className="btn-group btn-sm border-0">
                            <input type="hidden" className="form-control" id="txtId" />
                            <input type="text" className="form-control" placeholder="Search Here" value={filter} onChange={value => fnSetFilter(value.currentTarget.value)} /></div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={() => fnGetAllGroup(filter)}><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default HeaderBox;
