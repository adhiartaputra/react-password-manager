import { User } from '../../../firebase';

export const addUser = (payload) => {
  return dispatch => {
    User.add(payload)
    .then((ref) => {
      console.log('add user success with Id', ref.id)
    })
  }
}