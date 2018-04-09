import { 
  IS_UPPER_CASE,
  NOT_UPPER_CASE,
  IS_LOWER_CASE,
  NOT_LOWER_CASE,
  IS_SPECIAL_CHAR,
  NOT_SPECIAL_CHAR,
  IS_NUMBER,
  NOT_NUMBER,
  IS_LENGTH,
  NOT_LENGTH
} from '../UserActionType'

const initialState = {
  lowerCase: false,
  upperCase: false,
  specialCharacter: false,
  number: false,
  length: false
}

const passwordValidation = (state=initialState, action) => {
  switch(action.type) {
    case IS_UPPER_CASE:
      return ({
        ...state,
        upperCase: true
      })
    case NOT_UPPER_CASE:
      return ({
        ...state,
        upperCase: false
      })
    case IS_LOWER_CASE:
      return ({
        ...state,
        lowerCase: true
      })
    case NOT_LOWER_CASE:
      return ({
        ...state,
        lowerCase: false
      })
    case IS_SPECIAL_CHAR:
      return ({
        ...state,
        specialCharacter: true
      })
    case NOT_SPECIAL_CHAR:
      return ({
        ...state,
        specialCharacter: false
      })
    case IS_NUMBER:
      return ({
        ...state,
        number: true
      })
    case NOT_NUMBER:
      return ({
        ...state,
        number: false
      })
    case IS_LENGTH:
      return ({
        ...state,
        length: true
      })
    case NOT_LENGTH:
      return ({
        ...state,
        length: false
      })
    default:
      return state
  }
}

export default passwordValidation;