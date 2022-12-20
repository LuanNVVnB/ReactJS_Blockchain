import React, { Component } from 'react';
import { Button } from 'element-react';

class ObjectTypeTable extends Component {

    render() {
        const { fnDeleteObjectType, objectTypes, fnGetObjectTypesById, fnLoadEditPermissionUpdate } = this.props;
        console.log("useta------------",objectTypes)
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ObjectType Type Code</th>
                        <th>ObjectType Type Name</th>
                        {/* <th>Permission Type</th>
                        <th>Operations</th> */}
                    </tr>
                </thead>
                <tbody>
                {objectTypes.map(function (row, index) {
                    return (
                            <tr key={index}>
                                <td><span>{index + 1}</span></td>
                                <td><span>{row.code}</span></td>
                                <td><span>{row.name}</span></td>
                                {/* <td>{row.PermissionTypes.map(function (row, index) {
                                    return (
                                        <div key={index}>{row.name}</div>
                                    )
                                })}</td> */}
                                {/* <td>
                                    <Button type="primary" onClick={() => fnGetObjectTypesById(row.code)}><i className="fa fa-edit"></i></Button>
                                    <Button type="primary" onClick={() => fnLoadEditPermissionUpdate(row)}><i className="fa fa-key"></i></Button>
                                    <Button type="primary" icon="delete" onClick={() => fnDeleteObjectType(row.code)}></Button>
                                </td> */}
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        )
    }
}

export default ObjectTypeTable;