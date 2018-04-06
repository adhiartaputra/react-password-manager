import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    console.log(this.props.user)
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
                <input type="email" className="form-control" name="email" placeholder="Email"/><br/>
                <input type="password" className="form-control" name="password" placeholder="Password"/><br/>
                <button type="submit" className="btn btn-success" data-toggle="modal" data-target="#modal-login">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
