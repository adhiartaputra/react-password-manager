import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../components/Login'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Login store={store}/>)

test('Makes sure login is rendered', () => {
  expect(wrapper).toBeDefined()
  expect(wrapper.find('div').first().hasClass('modal'))
  expect(wrapper.find('button'))
})

// test('has handle on change method', () => {
//   expect(wrapper
// })