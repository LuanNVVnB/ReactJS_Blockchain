import React, { Component } from 'react';
import { Upload , Button} from 'element-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uploadFileAction from '../../actions/upload-file/uploadFileAction'
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider';
import HeaderBox from './HeaderBox';
import Paging from './Paging';
import { getPaging, getFilter, getAllFile } from '../../reducers/upload-file';
import ListFile from './ListFile';

class UploadFile extends Component {
  componentDidMount() {
    const { fnFilterFileByFileName, fnResetFilter } = this.props;
    fnResetFilter();
    fnFilterFileByFileName();
  }
  render() {
    const { handleSuccess, handleError, fileInfo } = this.props;
    return (
      <div>
        <div className="row wrapper border-bottom white-bg page-heading"  id="setting">
          <div className="col-lg-12">
            <h2>File management</h2>
            <ol id = "setting" className="breadcrumb" id="setting">
              <li id = "setting" className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li id = "setting" className="breadcrumb-item">
                <span>File management</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="wrapper wrapper-content animated">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Upload File</h4>
                  <Upload
                    className="upload-demo"
                    ref="upload"
                    action={CONFIG.API_BASE_URL + "/rest/file/upload-file"}
                    autoUpload={false}
                    headers={$http.getAuthenHeader()}
                    onSuccess={() => handleSuccess(this.props.paging)}
                    onError={(err, file, fileList) => handleError(err, file, fileList)}
                    trigger={<Button size="small" type="primary">Select File</Button>}
                  >
                    <Button style={{ marginLeft: '10px' }} size="small" type="success" onClick={() => this.refs.upload.submit()}>Upload to server</Button>
                  </Upload>
                  <HeaderBox paging={this.props.paging} fnSetFilter={this.props.fnSetFilter} filter={this.props.filter} fnSearch={this.props.fnSearch}></HeaderBox>
                  <hr />
                  <ListFile paging={this.props.paging} fileInfo={fileInfo} fnDeleteFile={this.props.fnDeleteFile}></ListFile>
                  <Paging filter={this.props.filter} fnChangeCurrentPage={this.props.fnChangeCurrentPage} fnChangePageSize={this.props.fnChangePageSize} paging={this.props.paging} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
const mapStateToProps = state => ({
  paging: getPaging(state),
  filter: getFilter(state),
  fileInfo: getAllFile(state),
});
const mapDispatchToProps = dispatch => bindActionCreators({
  handleSuccess: uploadFileAction.handleSuccess,
  handleError: uploadFileAction.handleError,
  fnResetFilter: uploadFileAction.fnResetFilter,
  fnSearch: uploadFileAction.fnSearch,
  fnChangePageSize: uploadFileAction.fnChangePageSize,
  fnChangeCurrentPage: uploadFileAction.fnChangeCurrentPage,
  fnSetFilter: uploadFileAction.fnSetFilter,
  fnFilterFileByFileName: uploadFileAction.fnFilterFileByFileName,
  fnDeleteFile: uploadFileAction.fnDeleteFile,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFile)