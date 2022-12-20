import React, { Component } from 'react';
import { Table, Dialog } from 'element-react';

class HistoryDetail extends Component {

    render() {
        const { historyDetail, closeDialog } = this.props;
        return (
            <Dialog title="History Details" size="tiny" visible={this.props.isShowDialog}
                onCancel={closeDialog}
                lockScroll={false} >
                <Dialog.Body>
                    <span>
                        <Table style={{ width: '100%' }}
                            columns={[{ label: "Object Name", prop: "objectChildName"},
                                { label: "Old Value", prop: "oldValue" },
                                { label: "New Value", prop: "newValue" }]}
                            data={historyDetail}
                            stripe={true} emptyText="No Data" />
                    </span>
                </Dialog.Body>
            </Dialog>
        )
    }
}

export default HistoryDetail;
