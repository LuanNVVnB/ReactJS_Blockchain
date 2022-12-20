import {
    SEARCH,
    FETCH_CATEGORY,
    FETCH_DELETED_CATEGORY,
    UPDATE_CATEGORY,
    COUNT_CATEGORY,
    FETCH_QUIZ,
    FETCH_DELETED_QUIZ,
    FETCH_PUBLIC_QUIZ,
    COUNT_QUIZ,
    UPDATE_QUIZ,
    FETCH_QUIZ_BY_ID,
    FETCH_QUIZ_TO_PLAY
} from "../../actions/quiz-management";

const initialState = {
    category: [],
    categoryDeleted: [],
    categoryTotal: 0,
    quiz: [],
    quizDeleted: [],
    quizPublic: [],
    quizTotal: 0,
    quizDetail: null,
    quizPlay: null,
    paging: {
        current: 1,
        maxResults: 5,
    },
    filter: ''
};

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                filter: action.payload
            };
        case COUNT_CATEGORY:
            return {
                ...state,
                categoryTotal: action.payload
            };
        case FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload.data,
                paging: { ...state.paging, current: action.payload.current, maxResults: action.payload.maxResults }
            };
        case FETCH_DELETED_CATEGORY:
            return {
                ...state,
                categoryDeleted: action.payload,
            };
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: state.category.map(i => i.id === action.payload.id ? action.payload : i)
            };
        case FETCH_QUIZ:
            return {
                ...state,
                quiz: action.payload.data,
                paging: { ...state.paging, current: action.payload.current, maxResults: action.payload.maxResults }
            };
        case FETCH_DELETED_QUIZ:
            return {
                ...state,
                quizDeleted: action.payload,
            };
        case FETCH_PUBLIC_QUIZ:
            return {
                ...state,
                quizPublic: action.payload.data,
            };
        case COUNT_QUIZ:
            return {
                ...state,
                quizTotal: action.payload
            };
        case UPDATE_QUIZ:
            return {
                ...state,
                quiz: state.quiz.map(i => i.id === action.payload.id ? action.payload : i)
            };
        case FETCH_QUIZ_BY_ID:
            return {
                ...state,
                quizDetail: action.payload
            };
        case FETCH_QUIZ_TO_PLAY:
            return {
                ...state,
                quizPlay: action.payload
            };
        default:
            return state;
    }
}

export default categoryReducer;
