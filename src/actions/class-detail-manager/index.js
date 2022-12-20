export const GET_ALL_CLASS_DETAILS = 'GET_ALL_CLASS_DETAILS';
export const GET_CLASS_DETAILS = 'GET_CLASS_DETAILS';
export const SHOW_CLASS_DETAILS = 'SHOW_CLASS_DETAILS';
export const CHANGE_VALUE_SEARCH_CLASS_DETAIL = 'CHANGE_VALUE_SEARCH_CLASS_DETAIL';


export const ADD_MEMBER_CLASS_DETAIL = 'ADD_MEMBER_CLASS_DETAIL';
export const REMOVE_MEMBER_CLASS_DETAIL = 'REMOVE_MEMBER_CLASS_DETAIL';
export const UPDATE_MEMBER_CLASS_DETAIL = 'UPDATE_MEMBER_CLASS_DETAIL';
export const GET_COUNT_MEMBER_CLASS_DETAIL = 'GET_COUNT_MEMBER_CLASS_DETAIL';
export const SEARCH_MEMBER_CLASS_DETAIL = 'SEARCH_MEMBER_CLASS_DETAIL';
export const GET_MEMBER_SEARCH_CLASS_DETAIL = 'GET_MEMBER_SEARCH_CLASS_DETAIL';
export const SET_FORM_ADD_MEMBER_CLASS_DETAIL = 'SET_FORM_ADD_MEMBER_CLASS_DETAIL';
export const GET_ALL_TRASH_LIST_CLASS_DETAIL = 'GET_ALL_TRASH_LIST_CLASS_DETAIL';
export const GET_ALL_TRASH_MEMBER_CLASS_DETAIL = 'GET_ALL_TRASH_MEMBER_CLASS_DETAIL';
export const REMOVE_TRASH_MEMBER_CLASS_DETAIL = 'REMOVE_TRASH_MEMBER_CLASS_DETAIL';
export const SHOW_TRASH_LIST_CLASS_DETAIL = 'SHOW_TRASH_LIST_CLASS_DETAIL';
export const SHOW_TRASH_MEMBER_CLASS_DETAIL = 'SHOW_TRASH_MEMBER_CLASS_DETAIL';


export const OPTION_SHOW_LIST_CLASS_DETAIL = 'OPTION_SHOW_LIST_CLASS_DETAIL';
export const GET_VALUE_OPTION_LIST_CLASS_DETAIL = 'GET_VALUE_OPTION_LIST_CLASS_DETAIL';
export const CHANGE_OPTION_SHOW_LIST_CLASS_DETAIL = 'CHANGE_OPTION_SHOW_LIST_CLASS_DETAIL';


export const GET_ALL_QUIZ_CLASS_DETAIL = 'GET_ALL_QUIZ_CLASS_DETAIL';
export const REMOVE_QUIZ_CLASS_DETAIL = 'REMOVE_QUIZ_CLASS_DETAIL';
export const GET_TRASH_QUIZ_CLASS_DETAIL = 'GET_TRASH_QUIZ_CLASS_DETAIL';
export const SHOW_DIALOG_TRASH_CLASS_DETAIL = 'SHOW_DIALOG_TRASH_CLASS_DETAIL';
export const SHOW_DIALOG_ADD_QUIZ_CLASS_DETAIL = 'SHOW_DIALOG_ADD_QUIZ_CLASS_DETAIL';
export const SET_SEARCH_ADD_QUIZ_CLASS_DETAIL = 'SET_SEARCH_ADD_QUIZ_CLASS_DETAIL';
export const GET_SEARCH_ADD_QUIZ_CLASS_DETAIL = 'GET_SEARCH_ADD_QUIZ_CLASS_DETAIL';
export const REMOVE_QUIZ_DATA_SEARCH_CLASS_DETAIL = 'REMOVE_QUIZ_DATA_SEARCH_CLASS_DETAIL';
export const REMOVE_QUIZ_TRASH_CLASS_DETAIL = 'REMOVE_QUIZ_TRASH_CLASS_DETAIL';
export const GET_COUNT_QUIZ_CLASS_DETAIL = 'GET_COUNT_QUIZ_CLASS_DETAIL';

//COMMON 
export const SEARCH_MEMBER_QUIZ_VALUE_CLASS_DETAIL = 'SEARCH_MEMBER_QUIZ_VALUE_CLASS_DETAIL';
//RANKING

export const SHOW_RANK_CLASS_DETAIL = 'SHOW_RANK_CLASS_DETAIL';
export const GET_RANK_BY_CLASS_DETAIL = 'GET_RANK_BY_CLASS_DETAIL';




export const getClassDetail = (classDetail) => {
    return {
        type: GET_CLASS_DETAILS,
        payload: classDetail
    }
};


export const showDialogClassDetail = (status) => {
    return {
        type: SHOW_CLASS_DETAILS,
        payload: status
    }
};

export const removeWhenAddMember = (member) => {
    return {
        type: ADD_MEMBER_CLASS_DETAIL,
        payload: member
    }
};

export const getCountMember = (count) => {
    return {
        type: GET_COUNT_MEMBER_CLASS_DETAIL,
        payload: count
    }
};

export const removeMember = (memberId) => {
    return {
        type: REMOVE_MEMBER_CLASS_DETAIL,
        payload: memberId
    }
};

export const updateMember = (member) => {
    return {
        type: UPDATE_MEMBER_CLASS_DETAIL,
        payload: member
    }
};


export const changeValueSearch = (value) => {
    return {
        type: CHANGE_VALUE_SEARCH_CLASS_DETAIL,
        payload: value
    }
};

export const searchAddMember = (keyword) => {
    return {
        type: SEARCH_MEMBER_CLASS_DETAIL,
        payload: keyword
    }
};

export const getMemberFromSearch = (members) => {
    return {
        type: GET_MEMBER_SEARCH_CLASS_DETAIL,
        payload: members
    }
};

export const setFormAddMember = (memberObj) => {
    return {
        type: SET_FORM_ADD_MEMBER_CLASS_DETAIL,
        payload: memberObj
    }
};


export const getTrashMember = (memberData) => {
    return {
        type: GET_ALL_TRASH_MEMBER_CLASS_DETAIL,
        payload: memberData
    }
};

export const removeTrashMember = (memberId) => {
    return {
        type: REMOVE_TRASH_MEMBER_CLASS_DETAIL,
        payload: memberId,
    }
};


export const showDialogTrashMember = (status) => {
    return {
        type: SHOW_TRASH_MEMBER_CLASS_DETAIL,
        payload: status
    }
};


export const changeOptionClassDetail = (opt) => {
    return {
        type: CHANGE_OPTION_SHOW_LIST_CLASS_DETAIL,
        payload: opt
    }
};



export const getQuizData = (quizData) => {
    return {
        type: GET_ALL_QUIZ_CLASS_DETAIL,
        payload: quizData
    }
};

export const setRemoveQuiz = (quizId) => {
    return {
        type: REMOVE_QUIZ_CLASS_DETAIL,
        payload: quizId
    }
};

export const getQuizTrash = (quizData) => {
    return {
        type: GET_TRASH_QUIZ_CLASS_DETAIL,
        payload: quizData
    }
};

export const setShowDialogTrashQuiz = (status) => {
    return {
        type: SHOW_DIALOG_TRASH_CLASS_DETAIL,
        payload: status
    }
};

export const setShowDialogAddQuiz = (status) => {
    return {
        type: SHOW_DIALOG_ADD_QUIZ_CLASS_DETAIL,
        payload: status
    }
};

export const setChangeSearchAddQuiz = (keyword) => {
    return {
        type: SET_SEARCH_ADD_QUIZ_CLASS_DETAIL,
        payload: keyword
    }
};

export const getDataSearchAddQuiz = (quizData) => {
    return {
        type: GET_SEARCH_ADD_QUIZ_CLASS_DETAIL,
        payload: quizData
    }
};

export const setRemoveQuizSearch = (quizId) => {
    return {
        type: REMOVE_QUIZ_DATA_SEARCH_CLASS_DETAIL,
        payload: quizId
    }
};

export const setRemoveQuizTrash = (quizId) => {
    return {
        type: REMOVE_QUIZ_TRASH_CLASS_DETAIL,
        payload: quizId
    }
};

export const getCountQuiz = (count) => {
    return {
        type: GET_COUNT_QUIZ_CLASS_DETAIL,
        payload: count
    }
};

export const setValueSearchCommon = (keyword) => {
    return {
        type: SEARCH_MEMBER_QUIZ_VALUE_CLASS_DETAIL,
        payload: keyword
    }
};

// Rank
export const setShowRanking = (status) => {
    return {
        type: SHOW_RANK_CLASS_DETAIL,
        payload: status
    }
};

export const setRankData = (data) => {
    return {
        type: GET_RANK_BY_CLASS_DETAIL,
        payload: data
    }
};