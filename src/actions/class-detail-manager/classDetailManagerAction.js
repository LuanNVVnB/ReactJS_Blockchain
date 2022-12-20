import {
    getClassDetail, getCountMember, showDialogClassDetail, getMemberFromSearch, changeValueSearch, setFormAddMember, removeWhenAddMember, getDataSearchAddQuiz, showDialogTrashMember, getTrashMember, removeTrashMember, changeOptionClassDetail,
    getQuizData, setRemoveQuiz, getQuizTrash, setShowDialogTrashQuiz, setShowDialogAddQuiz, setChangeSearchAddQuiz, setRemoveQuizSearch, setRemoveQuizTrash, getCountQuiz, setValueSearchCommon, setShowRanking, setRankData
} from "./index";
import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import { Notification, MessageBox } from "element-react";


// CLASS DETAIL 
export const fnGetClassDetail = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/detail/" + classId).then((response) => {
            dispatch(getClassDetail(response.data));
            dispatch(fnGetAllTrashMember(classId));
        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnShowDialogClassDetail = (status) => {
    return dispatch => {
        dispatch(showDialogClassDetail(status));
    }
};

export const fnChangeValueSearch = (keyword) => {
    return dispatch => {
        dispatch(changeValueSearch(keyword));
    }
};

// SET OPTION 1 OR 2 [MEMBER || QUIZ]
export const fnChangeOptionClassDetail = (opt) => {
    return dispatch => {
        dispatch(changeOptionClassDetail(opt));
    }
};


// MEMBER

export const fnCountMember = (member) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/count").then((response) => {
            dispatch(getCountMember(response.data));
        })
    }
};

export const fnSearchMembers = (keyword, clsId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/member?search=" + keyword + "&&classId=" + clsId).then((response) => {
            dispatch(getMemberFromSearch(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnAddMembers = (userId, classId) => {
    let memberObj = {};
    memberObj.user_id = userId;
    memberObj.class_id = classId;
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + "/v1/rest/class/member", memberObj).then((response) => {
            if (response.data.statusCode === 401) {
                Notification({
                    title: 'Errors',
                    message: response.data.msg,
                    type: 'error'
                });
            } else {
                Notification({
                    title: 'Success',
                    message: 'Add Member Success',
                    type: 'success'
                });
                dispatch(removeWhenAddMember(userId));
                dispatch(fnGetClassDetail(classId));
            }

        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};


export const fnRemoveMember = (classId, memberId) => {
    let memberObj = {};
    memberObj.class_id = classId;
    return dispatch => {
        MessageBox.confirm('This will remove member. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + "/v1/rest/class/member/" + memberId, memberObj).then((response) => {
                Notification({
                    title: 'Success',
                    message: 'Remove Member Success',
                    type: 'success'
                });
                dispatch(fnGetClassDetail(classId));
            }).catch((error) => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                });
            })
        })
    }
};

export const fnGetCountMember = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/member/count/" + classId).then((response) => {
            dispatch(getCountMember(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnGetAllTrashMember = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/member/trash/" + classId).then((response) => {
            dispatch(getTrashMember(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnRecoveryMember = (classId, memberId) => {
    let memberObj = {};
    memberObj.class_id = classId;
    return dispatch => {
        MessageBox.confirm('This will recovery member. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.putData(CONFIG.API_BASE_URL + "/v1/rest/class/member/trash/" + memberId, memberObj).then((response) => {
                Notification({
                    title: 'Success',
                    message: 'Recovery Member Success',
                    type: 'success'
                });
                dispatch(removeTrashMember(memberId));
                dispatch(fnGetClassDetail(classId));
            }).catch((error) => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                });
            })
        })
    }
};


export const fnSetFormAddMember = (memberObj) => {
    return dispatch => {
        dispatch(setFormAddMember(memberObj));
    }
};

export const fnShowTrashMember = (status) => {
    return dispatch => {
        dispatch(showDialogTrashMember(status));
    }
};


//QUIZ

export const fnGetQuizByClassId = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz/" + classId).then((response) => {
            dispatch(getQuizData(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnGetQuizTrash = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz/trash/" + classId).then((response) => {
            dispatch(getQuizTrash(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnRemoveQuiz = (quizId, classId) => {
    let objQuiz = {};
    objQuiz.class_id = classId;
    return dispatch => {
        MessageBox.confirm('This will remove quiz. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz/" + quizId, objQuiz).then((response) => {
                Notification({
                    title: 'Success',
                    message: 'Remove Quiz Success',
                    type: 'success'
                });
                dispatch(fnSetRemoveQuiz(quizId));
                dispatch(fnGetQuizTrash(classId));
            }).catch((error) => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                });
            })
        })
    }
};

export const fnSearchQuiz = (classId, keyword) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz?search=" + keyword + "&&classId=" + classId).then((response) => {
            dispatch(getDataSearchAddQuiz(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnGetCountQuiz = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz/count/" + classId).then((response) => {
            dispatch(getCountQuiz(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnAddQuiz = (classId, quizId) => {
    let quizObj = {};
    quizObj.class_id = classId;
    quizObj.quiz_id = quizId;
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz", quizObj).then((response) => {
            Notification({
                title: 'Success',
                message: 'Add Quiz Success',
                type: 'success'
            });
            dispatch(fnGetQuizByClassId(classId));
            dispatch(setRemoveQuizSearch(quizId));
            dispatch(fnGetQuizTrash(classId));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnRecoveryQuiz = (classId, quizId) => {
    let quizObj = {};
    quizObj.class_id = classId;
    return dispatch => {
        MessageBox.confirm('This will recovery quiz. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.putData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz/trash/" + quizId, quizObj).then((response) => {
                dispatch(setRemoveQuizTrash(quizId));
                dispatch(fnGetQuizByClassId(classId));
                dispatch(fnGetQuizTrash(classId));
            }).catch((error) => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                });
            })
        })
    }
}

export const fnSetRemoveQuiz = (quizId) => {
    return dispatch => {
        dispatch(setRemoveQuiz(quizId))
    }
};

export const fnSetShowDialogTrashQuiz = (status) => {
    return dispatch => {
        dispatch(setShowDialogTrashQuiz(status))
    }
};

export const fnSetShowDialogAddQuiz = (status) => {
    return dispatch => {
        dispatch(setShowDialogAddQuiz(status))
    }
};

export const fnSetSearchQuizzes = (keyword) => {
    return dispatch => {
        dispatch(setChangeSearchAddQuiz(keyword))
    }
};


// Common


export const fnSearchQuizAdded = (classId, keyword) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/quiz/search/q?q=" + keyword + "&&classId=" + classId).then((response) => {
            dispatch(getQuizData(response.data));
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnSearchMemberAdded = (classId, keyword) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/member/search/q?q=" + keyword + "&&classId=" + classId).then((response) => {
            dispatch(getClassDetail(response.data));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnSetSearchValueCommon = (keyword) => {
    return dispatch => {
        dispatch(setValueSearchCommon(keyword));
    }
};

// Ranking

export const fnSetShowRank = (status) => {
    return dispatch => {
        dispatch(setShowRanking(status));
    }
};

export const fnGetRankByClassId = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/rank/" + classId).then((response) => {
            dispatch(setRankData(response.data.response));
        }).catch((error) => {   
            console.log(error)
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};
