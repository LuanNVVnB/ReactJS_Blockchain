import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Trans } from 'react-i18next';

class HeaderBox extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="d-flex mt-1">
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={() => this.props.history.goBack()}><i className="fa fa-arrow-circle-o-left"></i> <Trans i18nKey={'export.back'} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default withRouter(HeaderBox);
