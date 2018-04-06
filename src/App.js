import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// import logo from './logo.svg';
import './App.css';
import store from '../src/store'
import Form from './components/Form'
import Home from './components/Home'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/form' component={ Form } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
