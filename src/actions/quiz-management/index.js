import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider'
import { Notification, MessageBox } from "element-react";
import React from "react";
import { Trans } from 'react-i18next';

export const SEARCH = 'SEARCH';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_DELETED_CATEGORY = 'FETCH_DELETED_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const COUNT_CATEGORY = 'COUNT_CATEGORY';
export const FETCH_QUIZ = 'FETCH_QUIZ';
export const FETCH_DELETED_QUIZ = 'FETCH_DELETED_QUIZ';
export const FETCH_PUBLIC_QUIZ = 'FETCH_PUBLIC_QUIZ';
export const UPDATE_QUIZ = 'UPDATE_QUIZ';
export const COUNT_QUIZ = 'COUNT_QUIZ';
export const FETCH_QUIZ_BY_ID = 'FETCH_QUIZ_BY_ID';
export const FETCH_QUIZ_TO_PLAY = 'FETCH_QUIZ_TO_PLAY';

export const fnSearch = (filter) => dispatch => {
    dispatch({ type: SEARCH, payload: filter })
    dispatch(fnCountCategory(filter))
}

export const fnCountCategory = (filter) => dispatch => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/category/count?filter=${filter}&a=a`)
        .then(response => {
            dispatch({
                type: COUNT_CATEGORY,
                payload: response.data
            })
            return response.data
        })
        .catch(error => console.log(error))
}

export const fnFetchCategory = (filter = null, startAt, maxResults) => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/category/search?filter=${filter}&startAt=${startAt - 1 < 0 ? 0 : startAt - 1}&maxResults=${maxResults}`)
        .then(response => {
            dispatch({
                type: FETCH_CATEGORY,
                payload: {
                    data: response.data,
                    current: startAt,
                    maxResults
                }
            })
            return response.data
        })
        .catch(error => console.log(error))
}

export const fnFetchDeletedCategory = () => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/category/deleted`)
        .then(response => {
            dispatch({
                type: FETCH_DELETED_CATEGORY,
                payload: response.data
            })
            return response.data
        })
        .catch(error => console.log(error))
}

export const fnRestoreDeletedCategory = (id) => (dispatch, getState) => {
    $http.putData(CONFIG.API_BASE_URL + `/rest/category/restore/${id}`)
        .then(response => {
            const { paging, filter } = getState().QuizManagement
            dispatch(fnFetchDeletedCategory())
            dispatch(fnFetchCategory(filter, paging.current, paging.maxResults))
            dispatch(fnCountCategory(filter))
        })
        .catch(error => console.log(error))
}

export const fnAddCategory = (data) => (dispatch, getState) => {
    $http.postData(CONFIG.API_BASE_URL + `/rest/category`, data)
        .then(response => {
            const { paging, filter } = getState().QuizManagement
            dispatch(fnFetchCategory(filter, paging.current, paging.maxResults))
            dispatch(fnCountCategory(filter))
            Notification({
                title: <Trans i18nKey="MenuList.popup-success" />,
                message: <Trans i18nKey="quiz.success-category" />,
                type: 'success'
            })
            return response
        })
        .catch(error =>
            error.response.data.errors.forEach(e =>
                Notification({
                    title: 'Errors',
                    message: Object.values(e.msg),
                    type: 'error'
                })
            ))
}

export const fnUpdateCategory = (id, data) => dispatch => {
    $http.putData(CONFIG.API_BASE_URL + `/rest/category/${id}`, data)
        .then(response => {
            dispatch({
                type: UPDATE_CATEGORY,
                payload: response.data
            })
            Notification({
                title: <Trans i18nKey="MenuList.popup-success" />,
                message: <Trans i18nKey="quiz.update-success" />,
                type: 'success'
            })
            return response.data
        })
        .catch(error =>
            error.response.data.errors.forEach(e =>
                Notification({
                    title: 'Errors',
                    message: Object.values(e.msg),
                    type: 'error'
                })
            ))
}

export const fnDeleteCategory = (id) => (dispatch, getState) => {
    MessageBox.confirm(<Trans i18nKey={'quiz.delete-category'} />, 'Warning', {
        confirmButtonText: <Trans i18nKey={'MenuList.button-ok'} />,
        cancelButtonText: <Trans i18nKey={'MenuList.button-cancel'} />,
        type: 'warning'
    }).then(() => {
        $http.deleteData(CONFIG.API_BASE_URL + `/rest/category/${id}`)
            .then(response => {
                const { paging, filter, categoryTotal } = getState().QuizManagement
                categoryTotal - 1 === ((paging.current - 1) * paging.maxResults)
                    ? dispatch(fnFetchCategory(filter, paging.current - 1, paging.maxResults))
                    : dispatch(fnFetchCategory(filter, paging.current, paging.maxResults))
                dispatch(fnCountCategory(filter))
                Notification({
                    title: 'Success',
                    message: 'Delete Category success',
                    type: 'success'
                })
                return response.data
            })
            .catch(error =>
                error.response.data.errors.forEach(e =>
                    Notification({
                        title: 'Errors',
                        message: Object.values(e.msg),
                        type: 'error'
                    })
                ))
    })
}


export const fnAddQuiz = (data) => (dispatch, getState) => {
    $http.postData(CONFIG.API_BASE_URL + `/rest/quiz`, data)
        .then(response => {
            const { paging, filter } = getState().QuizManagement
            dispatch(fnFetchQuiz(filter, paging.current, paging.maxResults))
            dispatch(fnCountQuiz(filter))
            Notification({
                title: 'Success',
                message: 'Add new Quiz success',
                type: 'success'
            })
            return response
        })
        .catch(error =>
            error.response.data.errors.forEach(e =>
                Notification({
                    title: 'Errors',
                    message: Object.values(e.msg),
                    type: 'error'
                })
            ))
}

export const fnCountQuiz = (filter) => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/quiz/count?filter=${filter}&a=a`)
        .then(response => {
            dispatch({
                type: COUNT_QUIZ,
                payload: response.data
            })
            return response.data
        })
        .catch(error => console.log(error))
}

export const fnFetchQuiz = (filter = null, startAt, maxResults) => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/quiz/search?filter=${filter}&startAt=${startAt - 1 < 0 ? 0 : startAt - 1}&maxResults=${maxResults}`)
        .then(response => {
            dispatch({
                type: FETCH_QUIZ,
                payload: {
                    data: response.data,
                    current: startAt,
                    maxResults
                }
            })
            return response.data
        })
        .catch(error => console.log(error))
}

export const fnFetchDeletedQuiz = () => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/quiz/deleted`)
        .then(response => {
            dispatch({
                type: FETCH_DELETED_QUIZ,
                payload: response.data
            })
            return response.data
        })
        .catch(error => console.log(error))
}

export const fnRestoreDeletedQuiz = (id) => (dispatch, getState) => {
    $http.putData(CONFIG.API_BASE_URL + `/rest/quiz/restore/${id}`)
        .then(response => {
            const { paging, filter } = getState().QuizManagement
            dispatch(fnFetchDeletedQuiz())
            dispatch(fnFetchQuiz(filter, paging.current, paging.maxResults))
            dispatch(fnCountQuiz(filter))
        })
        .catch(error => console.log(error))
}

export const fnFetchPublicQuiz = (filter = '', maxResults = '') => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/quiz/public?filter=${filter}&maxResults=${maxResults}`)
        .then(response => {
            dispatch({
                type: FETCH_PUBLIC_QUIZ,
                payload: {
                    data: response.data,
                }
            })
            return response.data
        })
        .catch(error => console.log(error))
}

export const fnUpdateQuiz = (id, data) => (dispatch, getState) => {
    $http.putData(CONFIG.API_BASE_URL + `/rest/quiz/${id}`, data)
        .then(response => {
            const { paging, filter } = getState().QuizManagement
            dispatch(fnFetchQuiz(filter, paging.current, paging.maxResults))
            dispatch(fnCountQuiz(filter))
            Notification({
                title: 'Success',
                message: 'Update Quiz success',
                type: 'success'
            })
            return response.data
        })
        .catch(error =>
            error.response.data.errors.forEach(e =>
                Notification({
                    title: 'Errors',
                    message: Object.values(e.msg),
                    type: 'error'
                })
            ))
}

export const fnDeleteQuiz = (id) => (dispatch, getState) => {
    MessageBox.confirm('This will delete category. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
    }).then(() => {
        $http.deleteData(CONFIG.API_BASE_URL + `/rest/quiz/${id}`)
            .then(response => {
                const { paging, filter, quizTotal } = getState().QuizManagement
                quizTotal - 1 === ((paging.current - 1) * paging.maxResults)
                    ? dispatch(fnFetchQuiz(filter, paging.current - 1, paging.maxResults))
                    : dispatch(fnFetchQuiz(filter, paging.current, paging.maxResults))
                dispatch(fnCountQuiz(filter))
                Notification({
                    title: 'Success',
                    message: 'Delete Quiz success',
                    type: 'success'
                })
                return response.data
            })
            .catch(error =>
                error.response.data.errors.forEach(e =>
                    Notification({
                        title: 'Errors',
                        message: Object.values(e.msg),
                        type: 'error'
                    })
                ))
    })
}

export const fnFetchQuizById = (id) => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/quiz/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_QUIZ_BY_ID,
                payload: response.data
            })
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
}

export const fnFetchQuizToPlay = (id) => (dispatch) => {
    $http.getData(CONFIG.API_BASE_URL + `/rest/quiz/play/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_QUIZ_TO_PLAY,
                payload: response.data
            })
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
}

export const fnAddNewQuestionToQuiz = (id, body) => (dispatch) => {
    $http.postData(CONFIG.API_BASE_URL + `/rest/quiz/question/${id}`, body)
        .then(response => {
            dispatch(fnFetchQuizById(id))
            Notification({
                title: 'Success',
                message: 'Add Question to this Quiz success',
                type: 'success'
            })
            return response.data
        })
        .catch(error =>
            error.response.data.errors.forEach(e =>
                Notification({
                    title: 'Errors',
                    message: Object.values(e.msg),
                    type: 'error'
                })
            ))
}

export const fnAddQuestionToQuiz = (body) => (dispatch, getState) => {
    $http.postData(CONFIG.API_BASE_URL + `/rest/quiz/question`, body)
        .then(response => {
            const { filter } = getState().QuizManagement
            dispatch(fnFetchPublicQuiz(filter))
            dispatch(fnFetchQuizById(body.quiz_id))
            Notification({
                title: 'Success',
                message: 'Add Question to this Quiz success',
                type: 'success',
                duration: 1000
            })
            return response.data
        })
        .catch(error =>
            error.response.data.errors.forEach(e =>
                Notification({
                    title: 'Errors',
                    message: Object.values(e.msg),
                    type: 'error'
                })
            ))
}

export const fnUpdateQuestion = (quizId = null, id, data) => (dispatch, getState) => {
    $http.putData(CONFIG.API_BASE_URL + `/rest/question/${id}`, data)
        .then(response => {
            quizId && dispatch(fnFetchQuizById(quizId))
            Notification({
                title: 'Success',
                message: 'Update Question success',
                type: 'success'
            })
            return response.data
        })
        .catch(error =>
            error.response.data.errors.forEach(e =>
                Notification({
                    title: 'Errors',
                    message: Object.values(e.msg),
                    type: 'error'
                })
            ))
}

export const fnRemoveQuestionFromQuiz = (quizId, quesId) => (dispatch) => {
    MessageBox.confirm('This will delete question. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
    }).then(() => {
        $http.deleteData(CONFIG.API_BASE_URL + `/rest/quiz/question?quizId=${quizId}&quesId=${quesId}`)
            .then(response => {
                quizId && dispatch(fnFetchQuizById(quizId))
                Notification({
                    title: 'Success',
                    message: 'Delete Question success',
                    type: 'success',
                    duration: 1000
                })
                return response.data
            })
            .catch(error =>
                error.response.data.errors.forEach(e =>
                    Notification({
                        title: 'Errors',
                        message: Object.values(e.msg),
                        type: 'error'
                    })
                ))
    })

}