import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PasswordValidator from '../components/PasswordValidator'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<PasswordValidator store={ store }/>)

test('Makes sure Component is rendered', () => {
  expect(wrapper).toBeDefined()
})