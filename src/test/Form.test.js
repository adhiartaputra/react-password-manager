import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../components/Form';
import store from '../store';
import moment from 'moment'
import { wrap } from 'module';
import Navbar from '../components/Navbar';
import Header from '../components/Header'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Form store={ store }/>).dive()

test('Makes sure Component is rendered', () => {
  // console.log(wrapper.instance(),'form')
  expect(wrapper).toBeDefined()
})

test('Makes sure component has Navbar component', () => {
  expect(wrapper.find(<Navbar />)).toBeDefined()
  expect(wrapper.find(<Header />)).toBeDefined()
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

test('Make sure has method for handleOnChange and handleOnClick', () => {
  expect(wrapper.instance().handleOnChange).toBeDefined()
  expect(wrapper.instance().handleOnSubmit).toBeDefined()
})

test('Make sure method handleOnChange send data to state', () => {
  let event = {
    target: {
      value: 'google.com',
      name: 'url'
    }
  }
  wrapper.instance().handleOnChange(event)
  expect(wrapper.state('newUser')[event.target.name]).toEqual(event.target.value)
})

test('Make sure method handleOnClick sumbit data to database', () => {
  wrapper.find('button').simulate('click')
})