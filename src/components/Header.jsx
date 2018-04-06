import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="loginHeader" style={{textAlign:"center"}}>
        <img src={logo} className="App-logo" alt="header"/>
      </div>
    )
  }
};
