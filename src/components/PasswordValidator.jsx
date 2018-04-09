import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PasswordValidator extends Component {
  render() {
    if (this.props.userPassword.length > 0) {
      return (
        <div className="form-group">
          <div className="card text-black bg-light mb-3">
            <div className="card-header">Password Strength</div>
            <div className="card-body">
              {
                Object.keys(this.props.password).map((key, i) => {
                  if (key === 'length') {
                    return (
                      <div key={i} className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" checked={this.props.password[key]} disabled="true" readOnly />
                        <label id="label-password" className="custom-control-label">Password has minimum 5 characters</label>
                      </div>
                    )
                  } else {
                    return (
                      <div key={i} className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" checked={this.props.password[key]} disabled="true" readOnly />
                        <label id="label-password" className="custom-control-label">Password has a/an { key } character</label>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return ''
    }
  }
};

const mapStateToProps = state => ({
  password: state.PasswordValidator
})

const connectedPasswordValidator = connect (mapStateToProps)(PasswordValidator)

export default connectedPasswordValidator