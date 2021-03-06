import { FETCH_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_BY_SEARCH } from '../UserActionType'

const initialState = {
  listData: [],
  loading: false,
  error: false
}

const fetchUserReducer = (state=initialState, action) => {
  switch ( action.type ) {
    case FETCH_USER_LOADING:
      return ({
        ...state,
        loading: true,
        error: false
      })
    case FETCH_USER_SUCCESS:
      return ({
        ...state,
        listData: action.payload,
        loading: false,
        error: false
      })
    case FETCH_USER_ERROR:
      return ({
        ...state,
        loading: false,
        error: true
      })
    case FETCH_USER_BY_SEARCH:
      return ({
        ...state,
        listData: [...action.payload],
        loading: false,
        error: true
      })
    default:
      return state
  }
}

export default fetchUserReducer;