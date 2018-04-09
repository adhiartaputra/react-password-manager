import React, { Component } from 'react';
import '../style/Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="container" >
        <div className="row">
          <input type="text" className="search col-lg-7" placeholder="Find your password here"/>
          <button className="btn-search btn btn-success col-lg-4"> Search </button>
        </div>
      </div>
    )
  }
};
