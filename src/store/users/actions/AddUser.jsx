import { User } from '../../../firebase';

export const addUser = (payload) => {
  return dispatch => {
    return User.add(payload)
    .then((ref) => {
      return ref.id
      // console.log('add user success with Id', ref.id)
    })
  }
}