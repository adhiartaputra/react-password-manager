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

export function passwordValidator (payload) {
  return dispatch => {
    const lowerCase = new RegExp("^(?=.*[a-z])")
    const upperCase = new RegExp("^(?=.*[A-Z])")
    const specialChar = /[^A-Za-z0-9]/
    const number = new RegExp("^(?=.*[0-9])")
    const length = new RegExp("^(?=.{5,})")
    if (lowerCase.test(payload)) {
      dispatch(lowerCaseValidated())
    } else {
      dispatch(notLowerCaseValidated())
    }
    if (upperCase.test(payload)) {
      dispatch(upperCaseValidated())
    } else {
      dispatch(notUpperCaseValidated())
    }
    if (specialChar.test(payload)) {
      dispatch(specialCharValidated())
    } else {
      dispatch(notSpecialCharValidated())
    }
    if (number.test(payload)) {
      dispatch(numberValidated())
    } else {
      dispatch(notNumberValidated())
    }
    if (length.test(payload)) {
      dispatch(lengthValidated())
    } else {
      dispatch(notLengthValidated())
    }
  }
}

const upperCaseValidated = () => {
  return {
    type: IS_UPPER_CASE
  }
}
const notUpperCaseValidated = () => {
  return {
    type: NOT_UPPER_CASE
  }
}
const lowerCaseValidated = () => {
  return {
    type: IS_LOWER_CASE
  }
}
const notLowerCaseValidated = () => {
  return {
    type: NOT_LOWER_CASE
  }
}
const specialCharValidated = () => {
  return {
    type: IS_SPECIAL_CHAR
  }
}
const notSpecialCharValidated = () => {
  return {
    type: NOT_SPECIAL_CHAR
  }
}
const numberValidated = () => {
  return {
    type: IS_NUMBER
  }
}
const notNumberValidated = () => {
  return {
    type: NOT_NUMBER
  }
}
const lengthValidated = () => {
  return {
    type: IS_LENGTH
  }
}
const notLengthValidated = () => {
  return {
    type: NOT_LENGTH
  }
}