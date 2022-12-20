import React, { Component } from 'react';
import { Button, Dialog, Select, Form } from 'element-react';

class EditRoleMember extends Component {

    render() {
        const { editRoleMemberData, listGroup, listUser, fnChangeGroupMember, fnChangeUserMember } = this.props;
        return (
            <Dialog title="Edit Role Member" size="tiny" visible={this.props.showEditMemberStatus}
                onCancel={() => this.props.fnCloseEditRoleMember()} lockScroll={false} >
                <Dialog.Body>
                    <Form labelWidth="100">
                        <Form.Item label="Users">
                            <Select value={editRoleMemberData.users} filterable={true} multiple={true} onChange={(value) => fnChangeUserMember(value)}>
                                {listUser.data.map(el => {
                                    return <Select.Option key={el.id} label={el.username} value={el.username} />
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Groups">
                            <Select value={editRoleMemberData.groups} filterable={true} multiple={true} onChange={(value) => fnChangeGroupMember(value)}>
                                {listGroup.data.map(el => {
                                    return <Select.Option key={el.id} label={el.groupName} value={el.groupName} />
                                })}
                            </Select>
                        </Form.Item>
                    </Form>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => this.props.fnCloseEditRoleMember()}>Cancel</Button>
                        <Button type="primary" onClick={() => this.props.fnEditRoleMember({ code: editRoleMemberData.code, userList: editRoleMemberData.users, groupNames: editRoleMemberData.groups })}>Submit</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}

export default EditRoleMember;