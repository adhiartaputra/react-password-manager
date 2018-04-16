import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from '../components/Search'
import store from '../store'

configure({ adapter: new Adapter() })

let wrapper 
wrapper = shallow(<Search store={ store }/>).dive()

test('Makes sure search is rendered', () => {
  expect(wrapper).toBeDefined()
})

test('Makes sure search has div named search content', () => {
  expect(wrapper.find('div').first().hasClass('search-content'))
})

test('Makes sure search has on change method and on click method', () => {
  expect(wrapper.instance().handleOnChange).toBeDefined()
  expect(wrapper.instance().handleOnClick).toBeDefined()
})

// test('Makes sure on change method is change the state', () => {
//   console.log(wrapper.instance())
//   let event = {
//     target: {
//       value: 'google.com',
//       name: 'url'
//     }
//   }
//   wrapper.instance().handleOnChange(event)
//   expect(wrapper.state('url')).toEqual(event.target.value)
// })