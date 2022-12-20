import React, { Component } from 'react';
import { Button, Dialog, Form, Select, Table } from 'element-react';

class ListGroup extends Component {
    render() {
        const { userData, showUserGroupDialog, fnCloseUserGroupDialog, selectGroupName,
            fnAddUserToGroup, fnRemoveUserInGroup, formGroup, fnChangeUserMember
        } = this.props;
        return (
            <Dialog title="UPDATE USER IN GROUP" size="tiny" visible={showUserGroupDialog} onCancel={() => fnCloseUserGroupDialog()}>
                <Dialog.Body>
                    <Form>
                        <Form.Item>
                            <Select value={formGroup} filterable={true} onChange={(value) => fnChangeUserMember(value)} >
                                {userData.map(el => {
                                    return <Select.Option key={el.id} label={el.username} value={el.username} />
                                })}
                            </Select>
                        </Form.Item>
                    </Form>
                    <hr></hr>
                    <Table labelPosition="center" style={{ width: '100%' }} height={250} data={this.props.formUserGroup} stripe={true} emptyText="No Data"
                        columns={[{ label: "User Name", prop: "username", },
                        {
                            label: "Operation", render: (row, column, index) => {
                                return <div>
                                    <Button type="danger" icon="delete" onClick={() => fnRemoveUserInGroup(row, selectGroupName)}></Button>
                                </div>
                            }
                        }]
                        } />
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={() => fnCloseUserGroupDialog()}>Cancel</Button>
                    <Button type="primary" onClick={() => fnAddUserToGroup(selectGroupName, formGroup.users)}>Submit</Button>
                </Dialog.Footer>
            </Dialog>
        );
    };
}

export default ListGroup;
