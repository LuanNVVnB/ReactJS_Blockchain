import { combineReducers } from 'redux'
import add from './add';
import fetch from "./fetch";

const reducer = combineReducers({
    addRatingReducer: add,
    fetchRatingReducer: fetch,
})

export default reducer;