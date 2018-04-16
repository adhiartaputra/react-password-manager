import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addUser, fetchUser, fetchUserBySearch, deleteUser, fetchUserLoading, handleEditData } from '../../store/users/actions'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)
const store =  mockStore({})

// test('test addUser in action', async () => {
//   let newUser = {
//     email: 'lalala@gmail.com',
//     password: '1@wE$',
//     url: 'github.com',
//     updatedAt: new Date(),
//     createdAt: new Date()
//   }
//   const result = await store.dispatch(addUser(newUser))
//   expect(result).toBeDefined()
// })

test('test fetchUser in action', async ()=> {
  const result = await store.dispatch(fetchUser())
  let actions = store.getActions()
  // console.log(actions)
  expect(result).toBeDefined()
  expect(result).not.toHaveLength(0)
  expect(actions[0].type).toEqual('FETCH_USER_LOADING')
  expect(actions[1].type).toEqual('FETCH_USER_SUCCESS')
  expect(actions[1].payload).not.toHaveLength(0)
})

test('test deleteUser', async () => {
  let userId = 'Bkuj7F36BlFi5NqIQKxG'
  const result = await store.dispatch(deleteUser(userId))
  let actions = store.getActions()
  expect(result).not.toBeDefined()
  expect(actions[0].type).toEqual('FETCH_USER_LOADING')
  expect(actions[1].type).toEqual('FETCH_USER_SUCCESS')
  expect(actions[1].payload).not.toHaveLength(0)
  
})

test('test fetchUser by Search', async () => {
  let payload = 'hacktiv8.com'
  const result = await store.dispatch(fetchUserBySearch(payload))
  expect(result).toBeDefined()
  expect(result).not.toHaveLength(0)
})

test('test handleEdit data', async () => {
  let payload = {
    id: 'lYJZblLxuhPBmlAMeiiC',
    createdAt: '2018-04-16T10:14:49.313Z',
    email: 'lalala@gmail.com',
    password: '1@wE$',
    updatedAt: '2018-04-16T10:14:49.313Z',
    url: 'github.com'
  }
  const result = await store.dispatch(handleEditData(payload))
  let actions = store.getActions()
  expect(result).not.toBeDefined()
  expect(actions[0].type).toEqual('FETCH_USER_LOADING')
  expect(actions[1].type).toEqual('FETCH_USER_SUCCESS')
  expect(actions[1].payload).not.toHaveLength(0)
})