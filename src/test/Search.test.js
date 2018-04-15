import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from '../components/Search'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Search store={ store }/>)

test('Makes sure search is rendered', () => {
  expect(wrapper).toBeDefined()
})

test('Makes sure search has div named search content', () => {
  expect(wrapper.find('div').first().hasClass('search-content'))
})