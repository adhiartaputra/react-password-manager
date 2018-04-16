import { FETCH_USER_ERROR, FETCH_USER_SUCCESS, FETCH_USER_LOADING } from '../UserActionType';
import { User } from '../../../firebase';

export const fetchUser = () => {
  return dispatch => {
    dispatch(fetchUserLoading())
    return User.get()
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
      return payload
    })
    .catch(err => {fetchUserError()})
  }
}

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload
  }
}

export const fetchUserLoading = () => ({
  
    type: FETCH_USER_LOADING
  
})

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR
  }
}