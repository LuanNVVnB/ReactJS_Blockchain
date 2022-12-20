import React, { Component } from "react";
import { Dialog, Button } from "element-react";
import moment from "moment";
import { Trans } from 'react-i18next';


class ShowRank extends Component {
    render() {
        const { fnSetShowRank, showRank, rankData } = this.props;
        console.log(rankData)
        return (
            <div>
                <Dialog title={<Trans i18nKey={'classDetail.rank'} />} size="small" visible={showRank}
                    onCancel={() => fnSetShowRank(false)}>
                    <Dialog.Body>
                        <div className="card">
                            <div className="card-body"> {/* table */}
                                <table className="table table-hover table-borderless border-v">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th><Trans i18nKey={'UserList.thdead-username'} /></th>
                                            <th>Email</th>
                                            <th><Trans i18nKey={'classDetail.score'} /></th>
                                            <th><Trans i18nKey={'Profile.status'} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rankData.map(function (item, idx) {
                                            return (
                                                <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                    <td>{idx + 1}</td>
                                                    <td>{item.rank['user']['username']}</td>
                                                    <td>{item.rank['user']['email']}</td>
                                                    <td>{item.rank['result']['score']}</td>
                                                    <td>{item.rank['result']['finish'] ? 'Complete' : 'InComplete'}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => fnSetShowRank(false)}><Trans i18nKey={'Button.button-cancel'} /></Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        );
    }
}

export default ShowRank;