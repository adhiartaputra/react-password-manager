import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from '../components/Navbar'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Navbar store={ store }/>)

test('Makes sure navbar is rendered', () => {
  expect(wrapper).toBeDefined()
})

test('Makes sure search has header tag', () => {
  expect(wrapper.find('nav').first())
})