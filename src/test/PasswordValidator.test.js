import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PasswordValidator from '../components/PasswordValidator'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<PasswordValidator store={ store } userPassword={ 1231 }/>).dive()

test('Makes sure Component is rendered', () => {
  // console.log(wrapper.instance(),'instance')
  expect(wrapper).toBeDefined()
})

test('Makes sure all status of input data is false', () => {
  expect(wrapper.instance().props.password.lowerCase).toEqual(false)
  expect(wrapper.instance().props.password.upperCase).toEqual(false)
  expect(wrapper.instance().props.password.specialCharacter).toEqual(false)
  expect(wrapper.instance().props.password.number).toEqual(false)
  expect(wrapper.instance().props.password.length).toEqual(false)
})