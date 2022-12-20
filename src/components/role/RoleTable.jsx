import React, { Component } from 'react';
import { Button } from 'element-react';

class RoleTable extends Component {

    render() {
        const { roleData, loadEditRoleMember, deleteRole, fnLoadEditPermissionUpdate } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Role Name</th>
                        <th>Code</th>
                        <th>Member</th>
                        <th>Permission</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                {roleData.map(function (row, index) {
                    return (
                            <tr key={index}>
                                <td><span>{index + 1}</span></td>
                                <td><span>{row.name}</span></td>
                                <td><span>{row.code}</span></td>
                                <td>
                                    <div>
                                        <b>User: </b>
                                        {row.UserRoles === undefined ? <div></div> : row.UserRoles.map((user, i) => <div key={i}>{user.username} </div>)}
                                    </div>
                                    <div>
                                        <b>Groups: </b>
                                        {row.UserRoles === undefined ? <div></div> : row.UserRoles.map((group, i) => <div key={i}>{group.group_name} </div>)}
                                    </div>
                                </td>
                                <td>
                                    {row.Permissions === undefined ? <div></div> : row.Permissions.map((permission, i) => {
                                        return <div key={i}>{permission.ObjectType.name + ' - ' + permission.PermissionType.name}</div>
                                    })}
                                </td>
                                <td>
                                    <Button type="primary" onClick={() => loadEditRoleMember(row)}><i className="fa fa-group"></i></Button>
                                    <Button type="primary" onClick={() => fnLoadEditPermissionUpdate(row.code, row.Permissions)}><i className="fa fa-key"></i></Button>
                                    <Button type="primary" icon="delete" onClick={() => deleteRole(row.code)}></Button>
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


export default RoleTable;