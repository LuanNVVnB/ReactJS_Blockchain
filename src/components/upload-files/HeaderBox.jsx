import React, { Component } from 'react';

class HeaderBox extends Component {
    render() {
        const { paging, fnSetFilter, filter, fnSearch } = this.props;
        return (
            <div>
                <div>
                    <div className=" mt-2 text-center">
                        <h1>File management</h1>
                        <hr/>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="btn-group btn-sm ml-auto mr-2">
                        </div>
                        <div className="btn-group btn-sm border-0">
                            <input type="hidden" className="form-control" id="txtId" />
                            <input type="text" className="form-control" placeholder="Search Here" value={filter} id="txtSearchUsername" onChange={value => fnSetFilter(value.currentTarget.value)} /></div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={() => fnSearch(filter, paging)}><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default HeaderBox;
