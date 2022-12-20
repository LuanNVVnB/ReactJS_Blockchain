import { combineReducers } from 'redux'
import add from './add';
import fetch from './fetch';
import deleteComment from './delete';
import updateComment from './update';

const reducer = combineReducers({
    addCommentReducer: add,
    fetchCommentReducer: fetch,
    deleteCommentReducer: deleteComment,
    updateCommentReducer: updateComment
})

export default reducer;