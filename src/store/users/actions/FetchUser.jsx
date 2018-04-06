import { FETCH_USER_ERROR, FETCH_USER_SUCCESS, FETCH_USER_LOADING } from '../UserActionType';
import { User } from '../../../firebase';

export const fetchUser = () => {
  return dispatch => {
    dispatch(fetchUserLoading())
    User.get()
    .then(snapshot => {
      let payload = []
      snapshot.forEach(doc => {
        let newUser = {
          id: doc.id,
          ...doc.data()
        }
        payload.push(newUser)
      })
      dispatch(fetchUserSuccess(payload))
    })
    .catch(err => {fetchUserError()})
  }
}

const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload
  }
}

const fetchUserLoading = () => {
  return {
    type: FETCH_USER_LOADING
  }
}

const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR
  }
}