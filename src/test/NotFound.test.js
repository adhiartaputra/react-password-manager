import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../components/NotFound'

configure({ adapter: new Adapter() })

test('Makes sure error message is rendered', () => {
  let wrapper = shallow(<NotFound />)
  expect(wrapper).toBeDefined()
  expect(wrapper.find('div').first().hasClass('container py-5'))
  expect(wrapper.find('h1').text()).toEqual(" I'm Sorry, No Content Available .... ")
  expect(wrapper.find('img')).toBeDefined()
})