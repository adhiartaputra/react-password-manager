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

wrapper = shallow(<Home store={store}/>)

test('should render <Home />', () => {
  expect(wrapper).toBeDefined()
  expect(wrapper.find('div').first().hasClass('container'))
})

test('should have table', () => {
  expect(wrapper).toBeDefined()
  expect(wrapper.find('table').first().hasClass('table table-hover table-responsive'))
})

test(`child component like Navbar, Header, Search, FormEdit, FormLogin`, () => {
  expect(wrapper.find('Navbar')).toBeDefined()
  expect(wrapper.find('Header')).toBeDefined()
  expect(wrapper.find('Search')).toBeDefined()
  expect(wrapper.find('FormEdit')).toBeDefined()
  expect(wrapper.find('FormLogin')).toBeDefined()
})