import React, { Component } from 'react';
import { Pagination } from 'element-react';

class Paging extends Component {

  render() {
    return (
      <div className="last">
        <div className="block">
          <span className="demonstration">&nbsp;</span>
          <Pagination onCurrentChange={currentPage => this.props.fnChangeCurrentPage(currentPage, this.props.paging, this.props.filter)} onSizeChange={pageSize => this.props.fnChangePageSize(pageSize, this.props.paging, this.props.filter)} layout="total, sizes, prev, pager, next, jumper" total={this.props.paging.total} pageSizes={[10, 20, 50, 100]} pageSize={this.props.paging.pageSize} currentPage={this.props.paging.currentPage} />
        </div>
      </div>
    )
  }

}

export default Paging;