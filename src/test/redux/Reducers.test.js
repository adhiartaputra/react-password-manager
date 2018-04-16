import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Users, PasswordValidator } from '../../store/users/reducers';
import store from '../../store'

test('test reducer for fetch data', () => {
  const state = store.getState().Users
  expect(state).toBeDefined()
})