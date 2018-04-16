import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../store'
import { wrap } from 'module';

configure({ adapter: new Adapter() })

let wrapper

wrapper = shallow(<Home store={store}/>).dive()

test('should render <Home />', () => {
  // console.log(wrapper.instance())
  expect(wrapper).toBeDefined()
  // expect(wrapper.find('div').first().hasClass('container'))
})

test(`should has initial state with false loading, false error, and [] users`, () => {
  expect(wrapper.instance().props.users).toEqual([])
  expect(wrapper.instance().props.loading).toEqual(false)
  expect(wrapper.instance().props.error).toEqual(false)
})