import React, { Component } from 'react';
import { fetchUserBySearch } from '../store/users/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  handleOnChange = (e) => {
    this.props.fetchUserBySearch(e.target.value)
  }

  handleOnClick = (payload) => {
    this.props.fetchUserFromSearch(payload)
  }

  render() {

    const formStye = {
      display: 'flex'
    }

    return (
      <div className="search-content">
          <div className="form-group search-box" style={ formStye }>
            <input className="form-control col-lg-10 my-4" type="text" name="url" placeholder="Your URL Here ...." aria-label="Search" onChange={ this.handleOnChange }/>
            <button className="btn btn-outline-success col-lg-2 mx-2 my-4" type="button" onClick={ () => this.handleOnClick(this.state.url) }>Search</button>
          </div>
          <p>{ this.state.url }</p>
        </div>
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserBySearch
}, dispatch)

const connectedSearch = connect(null, mapDispatchToProps)(Search)

export default connectedSearch;