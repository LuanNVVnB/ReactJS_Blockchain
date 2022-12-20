import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as historyActions from "../../actions/history";
import {
  getAllHistory,
  getHistory,
  getPaging,
  getFilter
} from "../../reducers/history";

import HistoryTable from "./HistoryTable";
import HistoryDetail from "./HistoryDetail";
import Paging from "./Paging";
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCreateHistoryDialog: false,
      isShowCreateHistoryValueDialog: false,
      isShowHistoryDetailDialog: false,
      historyId: ""
    };
  }

  componentWillMount() {
    const { fetchAllHistory, fnResetFilter } = this.props;
    fetchAllHistory();
    fnResetFilter();
  }

  render() {
    const { isShowHistoryDetailDialog } = this.state;
    const {
      histories,
      history,
      fetchHistoryValue,
      deleteHistoryValue,
    } = this.props;
    return (
      <div>
        <div className="row wrapper border-bottom white-bg page-heading"  id="setting">
          <div className="col-lg-12">
            <h2>History Management</h2>
            <ol id = "setting" className="breadcrumb">
              <li id = "setting" className="breadcrumb-item">
                <span>Home</span>
              </li>
              <li id = "setting" className="breadcrumb-item">
                <span>History Management</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="wrapper wrapper-content animated">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  {/*<Button type="primary" onClick={() => this.setState({isShowCreateHistoryDialog: true})}>Create History</Button>*/}
                  <br />
                  <br />
                  <HistoryTable
                    historyData={histories}
                    getHistoryDetail={fetchHistoryValue}
                    showHistoryDetailDialog={() =>
                      this.setState({ isShowHistoryDetailDialog: true })
                    }
                    showCreateHistoryValueDialog={historyId => {
                      this.setState({
                        isShowCreateHistoryValueDialog: true,
                        historyId
                      });
                    }}
                  />
                  <HistoryDetail
                    historyDetail={history || []}
                    isShowDialog={isShowHistoryDetailDialog}
                    deleteHistoryValue={deleteHistoryValue}
                    closeDialog={() =>
                      this.setState({ isShowHistoryDetailDialog: false })
                    }
                  />
                  <Paging
                    filter={this.props.filter}
                    fnChangeCurrentPage={this.props.fnChangeCurrentPage}
                    fnChangePageSize={this.props.fnChangePageSize}
                    paging={this.props.paging}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  histories: getAllHistory(state),
  history: getHistory(state),
  paging: getPaging(state),
  filter: getFilter(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllHistory: historyActions.fetchAllHistory,
      fetchHistoryValue: historyActions.fetchHistoryValue,
      createHistory: historyActions.createHistory,
      createHistoryValue: historyActions.createHistoryValue,
      deleteHistoryValue: historyActions.deleteHistoryValue,
      fnResetFilter: historyActions.fnResetFilter,
      fnSearch: historyActions.fnSearch,
      fnChangePageSize: historyActions.fnChangePageSize,
      fnChangeCurrentPage: historyActions.fnChangeCurrentPage,
      fnSetFilter: historyActions.fnSetFilter
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(History);
