import {
  FETCH_USER_ERROR,
  FETCH_USER_LOADING
} from '../UserActionType';
import moment from 'moment';
import { User } from '../../../firebase';

export function handleEditData (payload) {
  payload.updatedAt = moment().format('LLLL')
  return dispatch => {
    dispatch(fetchUserLoading())
    return User.doc(payload.id)
    .update(payload)
    .then(() => console.log('update succes'))
    .catch((err) => fetchUserError())
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