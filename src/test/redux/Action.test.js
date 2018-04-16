import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addUser, fetchUser, fetchUserBySearch, deleteUser, fetchUserLoading } from '../../store/users/actions'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)
const store =  mockStore({})

test('test addUser in action', async () => {
  let newUser = {
    email: 'lalala@gmail.com',
    password: '1@wE$'
  }
  const result = await store.dispatch(addUser(newUser))
  expect(result).toBeDefined()
})

test('test fetchUser in action', async ()=> {
  const result = await store.dispatch(fetchUser())
  const actions = store.getActions()
  console.log(actions)
  expect(result).toBeDefined()
  expect(result).not.toHaveLength(0)
  expect(actions[0].type).toEqual('FETCH_USER_LOADING')
  expect(actions[1].type).toEqual('FETCH_USER_SUCCESS')
  expect(actions[1].payload).not.toHaveLength(0)
})

test('test deleteUser', () => {
  
})