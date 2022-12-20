import React, { Component } from 'react';
import { Button } from 'element-react';

class HistoryTable extends Component {

    render() {
        const { historyData, getHistoryDetail, showHistoryDetailDialog } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Action</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {historyData == null ? <tbody><tr><td>History is empty</td></tr></tbody> : historyData.map(function (item, index) {
                        return (
                                <tr key={index}>
                                    <td><span>{index+1}</span></td>
                                    <td><span>{item.username == null ? '' : item.username}</span></td>
                                    <td><span>{item.action == null ? '' : item.action}</span></td>
                                    <td><span>{item.category == null ? '' : item.category}</span></td>
                                    <td><span>{item.content == null ? '' : item.content}</span></td>
                                    <td>
                                        <Button onClick={() => {showHistoryDetailDialog();getHistoryDetail(item.id)}} type="primary" icon="search"></Button>
                                        {/*<Button onClick={() => showCreateHistoryValueDialog(item.id)} type="second" icon="edit">Add history value</Button>*/}
                                    </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }
}

export default HistoryTable;
