import React, { Component } from 'react';
import { Button } from 'element-react';
import { Trans } from 'react-i18next';
import ListUserMetamask from './ListUserMetamask';

class ListUser extends Component {
    componentWillMount() {
        console.log("candidate___helllo wiill")
    }
    componentWillUnmount() {
        console.log("candidate___helllo wiillUn")
    }
    componentDidMount() {
        console.log("candidate___helllo 2")

    }
    unique(arr) {
        console.log("unique", arr)
        var newArr = []
        newArr = arr.filter(function (item) {
            return newArr.includes(item.ballotId) ? '' : newArr.push(item.ballotId)
        })
        console.log("new unique",newArr)
        return newArr
    }

    render() {
        const { userData, removeUserByUserName, fnGetUserByUsername, paging } = this.props;
        const hanlde = (outcomepublics) => {
           return this.unique(outcomepublics).map((item, index) => {
                return <div className="col-12 " key={index} style={{ color: 'green' }}>{`[ ${item.ballots.title}]`}</div>
            }
            )
        }
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th><Trans i18nKey={'UserList.thdead-fullname'} /></th>
                        <th><Trans i18nKey={'UserList.thdead-username'} /></th>
                        <th><Trans i18nKey={'UserList.thdead-email'} /></th>
                        <th>Balloted</th>
                        <th>MetaMask</th>
                        <th><Trans i18nKey={'UserList.thdead-operations'} /></th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(function (item, index) {
                        return (
                            <tr key={index}>
                                <td><span>{index + 1}</span></td>
                                <td><span>{item.firstName + ' ' + item.lastName}</span></td>
                                <td><span>{item.username}</span></td>
                                <td><span>{item.email}</span></td>

                                <td className="row">{item.outcomepublics?.length > 0 ? hanlde(item.outcomepublics) : <span className="text-muted">unregistered</span>}</td>
                                <td><span style={{ color: 'green' }}>{item.code_meta_mask?.slice(0, 6)}...${item.code_meta_mask?.slice(item.code_meta_mask.length - 5)}</span></td>
                                <td>
                                    <div className="btn-group btn-sm">
                                        <button onClick={() => fnGetUserByUsername(item.username)} className='btn btn-primary'><i className="fa fa-pencil"></i></button>
                                    </div>
                                    <div className="btn-group btn-sm">
                                        <button onClick={() => removeUserByUserName(item.username, paging)} className='btn btn-danger'><i className="fa fa-trash-o"></i> </button>
                                    </div>
                                    <div className="btn-group btn-sm">
                                        <ListUserMetamask item={item} />
                                    </div>
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

export default ListUser;