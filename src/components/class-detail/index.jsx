import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import AddMemberClassDialog from './AddMemberDialog';
import AddQuizClassDialog from './AddQuizDialog';
import ListMemberRemove from './ListMemberRemove';
import ListQuizRemove from './ListQuizRemove';
import MemberList from './MemberList';
import HeaderBox from './HeaderBox';
import QuizList from './QuizList';
import ShowRank from './ShowRank';
import { Trans, withTranslation } from 'react-i18next';
import {
    getDataClassDetail, showDialogClassDetail, searchMemberData, memberData, formAddMember, showDialogMemberTrash, getDataMemberTrash, getValueOptionClassDetail, getQuizData,
    getTrashQuizData, showDialogQuizTrash, showDialogAddQuiz, getSearchQuizData, getQuizDataSearch, getCountQuiz, getCountMember, getSearchValue, showRank, getRankData
} from '../../reducers/class-detail-management/index';
import { getInfoClass } from '../../reducers/class-management/index';
import * as ClassDetailManager from '../../actions/class-detail-manager/classDetailManagerAction';
import * as ClassManager from '../../actions/class-manager/classManagerAction';



class ClassDetail extends Component {
    componentDidMount() {
        const classId = this.props.location.search.split('?code=');
        const { fnGetClassDetail, fnGetQuiz, fnGetQuizTrash, fnGetInfoClass, fnGetRankByClass } = this.props;
        fnGetClassDetail(classId[1]);
        fnGetQuiz(classId[1]);
        fnGetQuizTrash(classId[1]);
        fnGetInfoClass(classId[1]);
        fnGetRankByClass(classId[1]);

    }

    render() {
        const { classDetailData, fnShowDialogClassDetail, showDialogClassDialog, fnSearchMember, fnChangeValueSearch, searchMemberData, memberData, getShowTrash, fnAddMembers, fnAddQuiz, fnRecoveryQuiz, countQuiz, countMember, fnSetSearchValueCommon, fnSearchMemberAdded, fnSearchQuizAdded, searchValue, fnSetShowRank, showRank, infoData,
            fnRemoveMember, fnShowTrash, getDataTrash, fnRecoveryMember, optionValue, fnOption, quizData, fnRemoveQuiz, fnSetShowDialogTrashQuiz, showDialogQuizTrash, getTrashQuizData, showDialogAddQuiz, fnSetShowDialogAddQuiz, fnSetSearchQuizzes, getSearchQuizData, fnSearchQuiz, getQuizDataSearch, rankData } = this.props;
        const classId = this.props.location.search.split('?code=')[1];
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-12">
                        <h2><Trans i18nKey={'class.header'} /></h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span><Trans i18nKey={'content.menu-herder-link-user'} /></span>
                            </li>
                            <li className="breadcrumb-item">
                                <span> {optionValue === 0 ? 'Member' : 'Quiz'} Of {infoData ? infoData?.className : ""}</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{optionValue === 0 ? <Trans i18nKey={'classDetail.member'} /> : <Trans i18nKey={'classDetail.quiz'} />}</h4>
                                    <HeaderBox classId={classId} searchValue={searchValue} fnSetSearch={fnSetSearchValueCommon} fnSearchMember={fnSearchMemberAdded} fnSearchQuiz={fnSearchQuizAdded} optionValue={optionValue} fnOption={fnOption} fnShowTrash={fnShowTrash} fnShowDialog={fnShowDialogClassDetail} fnShowDialogAddQuiz={fnSetShowDialogAddQuiz} fnShowDialogQuiz={fnSetShowDialogTrashQuiz} fnSetSearchQuizzes={fnSetSearchQuizzes} fnSetShowRank={fnSetShowRank} t={this.props.t} />
                                    <hr />
                                    {optionValue === 0 ?
                                        <MemberList countMember={countMember} classId={classId} fnRemoveMember={fnRemoveMember} memberData={classDetailData} />
                                        : <QuizList countQuiz={countQuiz} classId={classId} fnRemoveQuiz={fnRemoveQuiz} quizData={quizData} />}
                                    <AddMemberClassDialog t={this.props.t} searchMemberData={searchMemberData} memberData={memberData} fnChangeValueSearch={fnChangeValueSearch}
                                        fnAddMembers={fnAddMembers} classId={classId} fnSearchMember={fnSearchMember} fnShowDialog={fnShowDialogClassDetail} showDialog={showDialogClassDialog} />
                                    <AddQuizClassDialog t={this.props.t} classId={classId} fnAddQuiz={fnAddQuiz} fnSearchQuiz={fnSearchQuiz} fnShowDialog={fnSetShowDialogAddQuiz} showDialog={showDialogAddQuiz} searchQuiz={getSearchQuizData} fnSetSearch={fnSetSearchQuizzes} quizDataSearch={getQuizDataSearch} />
                                    <ListMemberRemove fnRecoveryMember={fnRecoveryMember} classId={classId} getDataTrash={getDataTrash} showTrash={getShowTrash} fnShowTrash={fnShowTrash} />
                                    <ListQuizRemove classId={classId} fnRecoveryQuiz={fnRecoveryQuiz} trashQuizData={getTrashQuizData} showTrashQuiz={showDialogQuizTrash} fnShowTrashQuiz={fnSetShowDialogTrashQuiz} />
                                    <ShowRank rankData={rankData} showRank={showRank} fnSetShowRank={fnSetShowRank} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    classDetailData: getDataClassDetail(state),
    showDialogClassDialog: showDialogClassDetail(state),
    searchMemberData: searchMemberData(state),
    memberData: memberData(state),
    formAddMember: formAddMember(state),
    countMember: getCountMember(state),
    getShowTrash: showDialogMemberTrash(state),
    getDataTrash: getDataMemberTrash(state),
    optionValue: getValueOptionClassDetail(state),
    quizData: getQuizData(state),
    getTrashQuizData: getTrashQuizData(state),
    showDialogQuizTrash: showDialogQuizTrash(state),
    showDialogAddQuiz: showDialogAddQuiz(state),
    getSearchQuizData: getSearchQuizData(state),
    getQuizDataSearch: getQuizDataSearch(state),
    countQuiz: getCountQuiz(state),
    searchValue: getSearchValue(state),
    showRank: showRank(state),
    infoData: getInfoClass(state),
    rankData: getRankData(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetClassDetail: ClassDetailManager.fnGetClassDetail,
    fnShowDialogClassDetail: ClassDetailManager.fnShowDialogClassDetail,
    fnChangeValueSearch: ClassDetailManager.fnChangeValueSearch,
    fnSearchMember: ClassDetailManager.fnSearchMembers,
    fnAddMembers: ClassDetailManager.fnAddMembers,
    fnRemoveMember: ClassDetailManager.fnRemoveMember,
    fnShowTrash: ClassDetailManager.fnShowTrashMember,
    fnRecoveryMember: ClassDetailManager.fnRecoveryMember,
    fnOption: ClassDetailManager.fnChangeOptionClassDetail,
    fnGetQuiz: ClassDetailManager.fnGetQuizByClassId,
    fnRemoveQuiz: ClassDetailManager.fnRemoveQuiz,
    fnGetQuizTrash: ClassDetailManager.fnGetQuizTrash,
    fnSetShowDialogTrashQuiz: ClassDetailManager.fnSetShowDialogTrashQuiz,
    fnSetShowDialogAddQuiz: ClassDetailManager.fnSetShowDialogAddQuiz,
    fnSetSearchQuizzes: ClassDetailManager.fnSetSearchQuizzes,
    fnSearchQuiz: ClassDetailManager.fnSearchQuiz,
    fnAddQuiz: ClassDetailManager.fnAddQuiz,
    fnRecoveryQuiz: ClassDetailManager.fnRecoveryQuiz,
    fnSetSearchValueCommon: ClassDetailManager.fnSetSearchValueCommon,
    fnSearchMemberAdded: ClassDetailManager.fnSearchMemberAdded,
    fnSearchQuizAdded: ClassDetailManager.fnSearchQuizAdded,
    fnSetShowRank: ClassDetailManager.fnSetShowRank,
    fnGetRankByClass: ClassDetailManager.fnGetRankByClassId,
    fnGetInfoClass: ClassManager.fnGetInfoClass,

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ClassDetail)));