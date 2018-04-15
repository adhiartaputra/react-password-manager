import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



export class Login extends Component {
  constructor () {
    super()
    this.state = {
      userLogin: {
        email: '',
        password: ''
      }
    }
  }

  handleOnChange = e => {
    let logged = {
      ...this.state.userLogin,
      [e.target.name]: e.target.value
    }
    this.setState({
      userLogin: logged
    })
  }

  handleOnSubmit = e => {
    if ( this.state.userLogin.email === this.props.user.email ) {
      if ( this.state.userLogin.password === this.props.user.password  ) {
        // return localStorage.setItem( 'userId', this.props.user.id )
      } else {
        alert( 'wrong password entered' )
      }
    } else {
      alert( 'wrong email entered' )
    }
  }

  render() {
    return (
      <div>
        <div className="modal" id="modal-login">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Please Login First</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="email" className="form-control" name="email" placeholder="Email" onChange={ this.handleOnChange }/><br/>
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={ this.handleOnChange } /><br/>
                <Link to='/'> <button type="submit" className="btn btn-success" data-toggle="modal" data-target="#modal-login" onClick={ this.handleOnSubmit }>Login</button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

const connectedLogin = connect(null, mapDispatchToProps)(Login)

export default connectedLogin;
