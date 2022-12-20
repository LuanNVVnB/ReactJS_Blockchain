import * as ACTIONS from '../../actions/class-detail-manager/index';
const initialState = {
    // CLASS_DETAILS
    classDetailData: [],
    showClassDetail: false,

    //MEMBER
    searchMemberData: "",
    formAddMember: {},
    memberData: [],
    trashMemberData: [],
    countMember: 0,
    showDialogTrashMember: false,

    // OPTION CLASS DETAIL
    optionValue: 0,

    // QUIZ
    searchQuizData: "",
    quizData: [],
    quizDataSearch: [],
    trashQuizData: [],
    countQuiz: 0,
    showDialogTrashQuiz: false,
    showDialogAddQuiz: false,

    //COMMON

    searchValue: "",

    //RANK
    rankData: [],
    showRank: false,

};



export function classDetailManagerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_CLASS_DETAILS:
            return {
                ...state,
                classDetailData: action.payload
            };
        case ACTIONS.SHOW_CLASS_DETAILS:
            return {
                ...state,
                showClassDetail: action.payload,
                searchMemberData: "",
                memberData: [],
            };
        case ACTIONS.CHANGE_VALUE_SEARCH_CLASS_DETAIL:
            return {
                ...state,
                searchMemberData: action.payload ? action.payload : ""
            };
        case ACTIONS.GET_MEMBER_SEARCH_CLASS_DETAIL:
            return {
                ...state,
                memberData: action.payload
            };
        case ACTIONS.ADD_MEMBER_CLASS_DETAIL:
            return {
                ...state,
                memberData: state.memberData.filter((v) => v.id !== action.payload)
            };
        case ACTIONS.SET_FORM_ADD_MEMBER_CLASS_DETAIL:
            let obj = {};
            obj.userId = action.payload.userId;
            obj.classId = action.payload.classId;
            return {
                ...state,
                formAddMember: obj
            };
        case ACTIONS.SHOW_TRASH_MEMBER_CLASS_DETAIL:
            return {
                ...state,
                showDialogTrashMember: action.payload
            };
        case ACTIONS.GET_ALL_TRASH_MEMBER_CLASS_DETAIL:
            return {
                ...state,
                trashMemberData: action.payload
            };
        case ACTIONS.SHOW_TRASH_LIST_CLASS_DETAIL:
            return {
                ...state,
                showDialogClassDetail: action.payload
            };
        case ACTIONS.GET_ALL_TRASH_LIST_CLASS_DETAIL:
            return {
                ...state,
                trashClassDetailData: action.payload
            };
        case ACTIONS.REMOVE_TRASH_MEMBER_CLASS_DETAIL:
            return {
                ...state,
                trashMemberData: state.trashMemberData.filter((v) => v.id !== action.payload)
            };
        case ACTIONS.CHANGE_OPTION_SHOW_LIST_CLASS_DETAIL:
            return {
                ...state,
                optionValue: action.payload,
            };
        case ACTIONS.GET_ALL_QUIZ_CLASS_DETAIL:
            return {
                ...state,
                quizData: action.payload
            };
        case ACTIONS.REMOVE_QUIZ_CLASS_DETAIL:
            return {
                ...state,
                quizData: state.quizData.filter((v) => v.id !== action.payload)
            };
        case ACTIONS.GET_TRASH_QUIZ_CLASS_DETAIL:
            return {
                ...state,
                trashQuizData: action.payload
            };
        case ACTIONS.SHOW_DIALOG_TRASH_CLASS_DETAIL:
            return {
                ...state,
                showDialogTrashQuiz: action.payload
            };
        case ACTIONS.SHOW_DIALOG_ADD_QUIZ_CLASS_DETAIL:
            return {
                ...state,
                searchQuizData: "",
                quizDataSearch: [],
                showDialogAddQuiz: action.payload
            }
        case ACTIONS.SET_SEARCH_ADD_QUIZ_CLASS_DETAIL:
            return {
                ...state,
                searchQuizData: action.payload
            }
        case ACTIONS.GET_SEARCH_ADD_QUIZ_CLASS_DETAIL:
            return {
                ...state,
                quizDataSearch: action.payload
            };
        case ACTIONS.REMOVE_QUIZ_DATA_SEARCH_CLASS_DETAIL:
            return {
                ...state,
                quizDataSearch: state.quizDataSearch.filter((v) => v.id !== action.payload)
            };
        case ACTIONS.REMOVE_QUIZ_TRASH_CLASS_DETAIL:
            return {
                ...state,
                trashQuizData: state.trashQuizData.filter((v) => v.id !== action.payload)
            };
        case ACTIONS.GET_COUNT_QUIZ_CLASS_DETAIL:
            return {
                ...state,
                countQuiz: action.payload
            };
        case ACTIONS.SEARCH_MEMBER_QUIZ_VALUE_CLASS_DETAIL:
            return {
                ...state,
                searchValue: action.payload
            };
        case ACTIONS.SHOW_RANK_CLASS_DETAIL:
            return {
                ...state,
                showRank: action.payload
            };
        case ACTIONS.GET_RANK_BY_CLASS_DETAIL:
            return {
                ...state,
                rankData: action.payload
            }
        default: return state;
    }
};


export const getDataClassDetail = state => state.ClassDetailManagement.classDetailData;
export const showDialogClassDetail = state => state.ClassDetailManagement.showClassDetail;


// Member
export const searchMemberData = state => state.ClassDetailManagement.searchMemberData;
export const memberData = state => state.ClassDetailManagement.memberData;
export const formAddMember = state => state.ClassDetailManagement.formAddMember;
export const getDataMemberTrash = state => state.ClassDetailManagement.trashMemberData;
export const showDialogMemberTrash = state => state.ClassDetailManagement.showDialogTrashMember;
export const getCountMember = state => state.ClassDetailManagement.countMember;

// Option
export const getValueOptionClassDetail = state => state.ClassDetailManagement.optionValue;


// Quiz
export const getQuizData = state => state.ClassDetailManagement.quizData;
export const getTrashQuizData = state => state.ClassDetailManagement.trashQuizData;
export const showDialogQuizTrash = state => state.ClassDetailManagement.showDialogTrashQuiz;
export const showDialogAddQuiz = state => state.ClassDetailManagement.showDialogAddQuiz;
export const getSearchQuizData = state => state.ClassDetailManagement.searchQuizData;
export const getQuizDataSearch = state => state.ClassDetailManagement.quizDataSearch;
export const getCountQuiz = state => state.ClassDetailManagement.countQuiz;

// Common 
export const getSearchValue = state => state.ClassDetailManagement.searchValue;


//Rank
export const showRank = state => state.ClassDetailManagement.showRank;
export const getRankData = state => state.ClassDetailManagement.rankData;


export default classDetailManagerReducer;