import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormEdit from '../components/FomEdit'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<FormEdit store={ store }/>).dive()

test('Makes sure Component is rendered', () => {
  console.log(wrapper.instance(),'instance')
  expect(wrapper).toBeDefined()
})

test('Make sure component has id, url,and password on state', () => {
  let initial = {
      id: '',
      url: '',
      password: '',
  }
  expect(wrapper.instance().state).toEqual(initial)
})