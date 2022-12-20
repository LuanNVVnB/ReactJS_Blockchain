import { FETCH_RATING, RATING_CHANGE_DATA, CLOSE_MODAL_RATING, OPEN_MODAL_RATING, UPDATE_CURRENT_RATING_ID } from "../../../actions/commentation/rating-comment";

const initialState = {
  loading: false,
  rating: {
    ratingNumber: 0
  },
  isUpdate: false,
  isOpen: false,
  ratingData: 0,
};

export default function fetchRatingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RATING:
      return {
        ...state,
        loading: false,
        rating: action.payload === null ? {ratingNumber: 0} : action.payload,
        isUpdate: action.payload === null ? false : true
      };
    case RATING_CHANGE_DATA:
      console.log("Payload Data: ", action.payload);
      return {
        ...state,
        rating: Object.assign({}, state.rating, { [action.payload.key]: (action.payload.value - 1) })
        // rating: (action.payload - 1)
      };
    case OPEN_MODAL_RATING:
      return {
        ...state,
        isOpen: true
      };
    case CLOSE_MODAL_RATING:
      return {
        ...state,
        isOpen: false
      };
      case UPDATE_CURRENT_RATING_ID:
        return {
          ...state,
          ratingData: action.payload
        };
      

    default:
      return state;
  }
}

export const getRatingComment = state => state.Commentation.ratingReducer.fetchRatingReducer.rating;
export const getCheckUpdateRating = state => state.Commentation.ratingReducer.fetchRatingReducer.isUpdate;
export const getModalToggle = state => state.Commentation.ratingReducer.fetchRatingReducer.isOpen;
export const getRatingData= state => state.Commentation.ratingReducer.fetchRatingReducer.ratingData;