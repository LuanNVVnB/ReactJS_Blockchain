import React, { Component } from "react";
import { Trans } from 'react-i18next';

class MenuList extends Component {
    render() {
        const { menuData, fnDeleteMenuData, fnToggleUpdateModel, fnToggleEditMemberModel } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>ParentId</th>
                        <th>URL</th>
                        <th>Icon</th>
                        {/* <th>Image Icon</th> */}
                        <th><Trans i18nKey='MenuList.thead-rode' /></th>
                        <th><Trans i18nKey='MenuList.thead-level' /></th>
                        <th><Trans i18nKey='MenuList.thead-enable' /></th>
                        <th><Trans i18nKey='MenuList.thead-operatione' /></th>
                    </tr>
                </thead>
                <tbody>
                    {menuData.map(function (item, index) {
                        return (
                            <tr key={index}>
                                <td><span>{item.id}</span></td>
                                <td><span>{item.name}</span></td>
                                <td><span>{item.parentId}</span></td>
                                <td><span>{item.url}</span></td>
                                <td><span> <i className={item.icon}></i></span></td>
                                {/* <td><span>{item.imageIcon ? <img alt="icon" className="iconImageView" src={item.imageIcon} /> : ''}</span></td> */}
                                <td><div>{item.menuRoles === [] ? <span></span> : item.menuRoles.map((item, i) => <span key={i}> {item.roleCode} </span>)}</div></td>
                                <td><span>{item.level}</span></td>
                                <td><span>{item.enable ? 'ON' : 'OFF'}</span></td>
                                <td>
                                    <button className="btn btn-primary mx-1" type="button" onClick={() => fnToggleUpdateModel(true, item.id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <button className="btn btn-info  mx-1" type="button" onClick={() => fnToggleEditMemberModel(true, item.id)}><i className="fa fa-key" aria-hidden="true"></i></button>
                                    <button className="btn btn-danger mx-1" type="button" onClick={() => fnDeleteMenuData(item.id)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    };
}

export default MenuList;
