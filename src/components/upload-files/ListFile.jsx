import React, { Component } from 'react';
import { Button } from 'element-react';
import * as CONFIG from '../../config/configUrl'
class ListFile extends Component {

    render() {
        const { fileInfo, fnDeleteFile, paging } = this.props;
        let id;
        const size = {
            width: '300px'
        }
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>File Name</th>
                        <th>File Size</th>
                        <th>File Path</th>
                        <th>Created Date</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                {fileInfo.map(function (item, index) {
                    return (
                            <tr key={index}>
                                <td><span>{index + 1}</span></td>
                                <td><span>{item.filename}</span></td>
                                <td><span>{parseFloat((item.fileSize / 1024 / 1024)).toFixed(2) + ' MB'}</span></td>
                                <td style={size}><span>{item.filePath}</span></td>
                                <td><span>{new Date(item.createdDate).toLocaleString()}</span></td>
                                <td>
                                    <button hidden>{id = item._id === undefined ? item.id : item._id}</button>
                                    <Button onClick={() => fnDeleteFile(id, paging)} type="primary" icon="delete"></Button>
                                    <a className="el-button el-button--primary" href={CONFIG.API_BASE_URL + "/v1/rest/public/download?id=" + id}><i className="fa fa-cloud-download"></i></a>
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        );
    };
}

export default ListFile;