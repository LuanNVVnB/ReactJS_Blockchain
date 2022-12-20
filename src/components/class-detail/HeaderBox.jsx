import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Trans, withTranslation } from 'react-i18next';

class HeaderBox extends Component {
    render() {
        const { t } = this.props;
        const { classId, searchValue, fnShowDialog, fnShowTrash, fnShowDialogQuiz, optionValue, fnOption, fnShowDialogAddQuiz, fnSetSearch, fnSearchMember, fnSearchQuiz, fnSetShowRank } = this.props;
        return (
            <div>
                <div>
                    <div className="d-flex mt-1">
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={() => this.props.history.goBack()}><i className="fa fa-arrow-circle-o-left"></i> <Trans i18nKey={'export.back'} /> </button>
                        </div>
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={(e) => parseInt(optionValue) === 0 ? fnShowTrash(true) : fnShowDialogQuiz(true)} ><i className="fa fa-trash-o"></i> <Trans i18nKey={'class.trash'} /> </button>
                        </div>
                        <div className="btn-group btn-sm ml-auto mr-2">
                        </div>
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={(e) => fnSetShowRank(true)} ><i className="fa fa-bar-chart"></i> <Trans i18nKey={'classDetail.rank'} /> </button>
                        </div>
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={(e) => fnOption(parseInt(optionValue) === 0 ? 1 : 0)} ><i className={parseInt(optionValue) === 0 ? "fa fa-question-circle" : "fa fa-user"}> </i>{" "}{parseInt(optionValue) === 0 ? <Trans i18nKey={'classDetail.quiz'} /> : <Trans i18nKey={'classDetail.member'} />}  </button>
                        </div>
                        <div className="btn-group btn-sm">
                            <button className="btn btn-primary" onClick={() => parseInt(optionValue) === 0 ? fnShowDialog(true) : fnShowDialogAddQuiz(true)}><i className="fa fa-plus-circle"></i>{" "}{parseInt(optionValue) === 0 ? <Trans i18nKey={'classDetail.add'} /> : <Trans i18nKey={'classDetail.quiz'} />} </button>
                        </div>
                        <div className="btn-group btn-sm border-0">
                            <input type="hidden" className="form-control" />
                            <input type="text" className="form-control" placeholder={parseInt(optionValue) === 0 ? t('classDetail.searchMember') : t('classDetail.searchQuiz')} onChange={(e) => fnSetSearch(e.target.value)} /></div>
                        <div className="btn-group btn-sm">
                            <button type="button" className="btn btn-primary" onClick={(e) => parseInt(optionValue) === 0 ? fnSearchMember(classId, searchValue) : fnSearchQuiz(classId, searchValue)} ><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div >
        );
    };
}

export default withTranslation()(withRouter(HeaderBox));
