import React, { Component } from 'react';
import { Button } from 'element-react';
import { Trans } from 'react-i18next';

class ListGroup extends Component {

    render() {
        const { groupData, fnRemoveGroup, fnGetGroupByGroupname, fnEditGroupUser } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th><Trans i18nKey='GoupsList.thead-name' /></th>
                        <th><Trans i18nKey='GoupsList.thead-description' /></th>
                        <th><Trans i18nKey='GoupsList.thead-operations' /></th>
                    </tr>
                </thead>
                <tbody>
                    {groupData.map(function (item, index) {
                        return (
                            <tr key={index}>
                                <td><span>{index + 1}</span></td>
                                <td><span>{item.groupName}</span></td>
                                <td><span>{item.description}</span></td>
                                <td>
                                    <Button type="primary" icon="edit" onClick={() => fnGetGroupByGroupname(item)}></Button>
                                    <Button type="primary" icon="plus" onClick={() => fnEditGroupUser(item.groupName, item.directoryId)}></Button>
                                    <Button type="primary" icon="delete" onClick={() => fnRemoveGroup(item.groupName)}></Button>
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

export default ListGroup;
