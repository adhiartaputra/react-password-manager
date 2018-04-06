import React, { Component } from 'react';
import '../style/LoginFormStyle.css';
import Header from './Header';
import { connect } from 'react-redux';
import moment from 'moment'
import { bindActionCreators } from 'redux';
import { addUser } from '../store/users/actions';
import Navbar from './Navbar';
// import swal from 'sweetalert2';


export class Form extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor () {
    super()
    this.state = {
      newUser: {
        url: '',
        email: '',
        password: '',
        createdAt: moment().format('LLLL'),
        updatedAt: moment().format('LLLL')
      }
    }
  }

  handleOnChange = e => {
    let objAdd = {
      ...this.state.newUser,
      [e.target.name]: e.target.value
    }
    this.setState({
      newUser: objAdd
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addUser(this.state.newUser)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Header/>
          <h1 style={{textAlign:"center"}}>Save your password here</h1>
          <div className="row login-form" onSubmit={ this.handleOnChange }>
            <div className="col-md-3"/>
            <div className="col-md-6">
              <input type="text" className="form-control" name="url" placeholder="Url" onChange={ this.handleOnChange }/><br/>
              <input type="email" className="form-control" name="email" placeholder="Email" onChange={ this.handleOnChange }/><br/>
              <input type="password" className="form-control" name="password" placeholder="Password" onChange={ this.handleOnChange }/><br/>
              <button type="submit" className="btn btn-primary" onClick={ this.handleOnSubmit }>Save</button>
            </div>
            <div className="col-md-3"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser
}, dispatch)

const connectedForm = connect(null, mapDispatchToProps)(Form)

export default connectedForm;