import { HANDLE_CHANGE_EDIT  } from '../UserActionType';

export function handleChangeEdit (payload) {
  return {
    type: HANDLE_CHANGE_EDIT,
    payload
  }
}