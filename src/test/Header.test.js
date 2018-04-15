import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../components/Header'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Header />)

test('Makes sure header is rendered', () => {
  expect(wrapper).toBeDefined()
})

test('Makes sure has class div with class loginHeader', () => {
  expect(wrapper.find('div').first().hasClass('loginHeader'))
})
