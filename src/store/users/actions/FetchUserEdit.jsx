import { EDIT_USER } from '../UserActionType'

export function fetchUserEdit (payload) {
  return {
    type: EDIT_USER,
    payload
  }
}