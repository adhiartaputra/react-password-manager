import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Users, EditUser, PasswordValidator } from './users/reducers'

const appStore = combineReducers({
  Users,
  EditUser,
  PasswordValidator
})

const store = createStore(
  appStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store