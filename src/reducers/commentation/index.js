import { combineReducers } from 'redux'
import commentReducers from './comment';
import ratingReducers from './rating-comment';

const reducer = combineReducers({
    commentReducer: commentReducers,
    ratingReducer: ratingReducers
})

export default reducer;
