import React, { Component } from 'react';
import '../style/LoginFormStyle.css';
import Header from './Header';
import { connect } from 'react-redux';
import moment from 'moment'
import { bindActionCreators } from 'redux';
import { addUser, passwordValidator } from '../store/users/actions';
import Navbar from './Navbar';
import PasswordValidator from './PasswordValidator'
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
    let newPass = {
      password: e.target.value
    }
    this.props.passwordValidator(newPass.password)
  }

  handleOnSubmit = e => {
    e.preventDefault()
    const validator = this.props.pass
    const validate = validator.upperCase && validator.lowerCase && validator.number && validator.length && validator.specialCharacter
    if ( validate ) {
      this.props.addUser(this.state.newUser)
      this.props.history.push('/')
    } else {
      alert("Your password is not strong enough")
    }
  }

  render() {
    const password = this.props.pass
    const checker = password.upperCase && password.lowerCase && password.number && password.length && password.specialCharacter
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Header/>
          <h1 style={{textAlign:"center"}}>Save your password here</h1>
          <div className="row login-form" onSubmit={ this.handleOnChange }>
            <div className="col-md-3"/>
            <div className="col-md-6">
              <input type="text" className="form-control" name="url" placeholder="Url" onChange={ this.handleOnChange } required/><br/>
              <input type="email" className="form-control" name="email" placeholder="Email" onChange={ this.handleOnChange } required/><br/>
              <input type="password" className="form-control" name="password" placeholder="Password" onChange={ this.handleOnChange } required/><br/>
              <PasswordValidator userPassword={ this.state.newUser.password }/>
              { checker ?
                <button type="submit" className="btn btn-primary" onClick={ this.handleOnSubmit }>Save</button>
                : 
                <button type="submit" className="btn btn-primary disabled" >Save</button>
              }
            </div>
            <div className="col-md-3"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pass: state.PasswordValidator
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser, passwordValidator
}, dispatch)

const connectedForm = connect(mapStateToProps, mapDispatchToProps)(Form)

export default connectedForm;