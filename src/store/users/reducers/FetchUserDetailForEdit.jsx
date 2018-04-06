import { 
  EDIT_USER,
  HANDLE_CHANGE_EDIT 
} from '../UserActionType'

const initialState = {
  url: '',
  email: '',
  password: ''
}

const fetchUserDetailForEdit = ( state={...initialState}, action ) => {
  switch ( action.type ){
    case EDIT_USER:
      return action.payload
    case HANDLE_CHANGE_EDIT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default fetchUserDetailForEdit