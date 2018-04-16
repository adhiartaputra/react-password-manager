import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../components/Login'
import store from '../store'
import { changeExt } from 'upath';

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Login store={store} user={ {email: 'lalal@gmail.com', password:'123'} }/>).dive()
// console.log(wrapper.instance(),'login')

test('Makes sure login is rendered', () => {
  expect(wrapper).toBeDefined()
  expect(wrapper.find('div').first().hasClass('modal'))
  expect(wrapper.find('button'))
})

test('has handle on change method', () => {
  let event = {
    target: {
      value: wrapper.instance().props.user.email,
      name: 'email'
    }
  }
  let change = wrapper.instance().handleOnChange(event)
  expect(change).toEqual()
  // expect(wrapper.state('userLogin')[event.target.name]).toEqual(event.target.value)
})

test('handle on submit method', () => {
  let submit = wrapper.instance().handleOnSubmit()
  expect(submit).toEqual()
  // expect(wrapper.state('userLogin').email).toEqual(wrapper.instance().props.user.email)
})