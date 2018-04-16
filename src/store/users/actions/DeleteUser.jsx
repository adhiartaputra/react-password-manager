import { FETCH_USER_ERROR, FETCH_USER_LOADING } from '../UserActionType'
import { User } from '../../../firebase'

export function deleteUser (userId) {
  return dispatch => {
    dispatch(fetchUserLoading())
    User.doc(userId)
    .delete()
      .then(() => {
        // console.log(data, 'ini data')
      })
      .catch((err) => dispatch(fetchUserError()))
  }
}

function fetchUserLoading () {
  return {
    type: FETCH_USER_LOADING
  }
}

function fetchUserError () {
  return {
    type: FETCH_USER_ERROR
  }
}