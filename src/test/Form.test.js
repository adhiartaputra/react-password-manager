import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../components/Form';
import store from '../store';
import moment from 'moment'
import { wrap } from 'module';

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Form store={ store }/>).dive()

test('Makes sure Component is rendered', () => {
  // console.log(wrapper.instance(),'instance')
  expect(wrapper).toBeDefined()
})

test('Make sure component has url, email, password, created at, and updated at on state', () => {
  let initial = {
    newUser: {
      url: '',
      email: '',
      password: '',
      createdAt: moment().format('LLLL'),
      updatedAt: moment().format('LLLL')
    }
  }
  expect(wrapper.instance().state.newUser).toEqual(initial.newUser)
})

test('Makes sure all data from redux is false', () => {
  expect(wrapper.instance().props.pass.lowerCase).toEqual(false)
  expect(wrapper.instance().props.pass.upperCase).toEqual(false)
  expect(wrapper.instance().props.pass.specialCharacter).toEqual(false)
  expect(wrapper.instance().props.pass.number).toEqual(false)
  expect(wrapper.instance().props.pass.length).toEqual(false)
})