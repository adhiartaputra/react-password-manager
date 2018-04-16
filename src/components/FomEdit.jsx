import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleEditData } from '../store/users/actions';

export class FormEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      url:'',
      password:'',
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      id: this.props.user.id
    })
  }
  
  handleOnSubmit = (payload) => {
    this.props.handleEditData(payload)
  }

  render() {
    // console.log(this.props.user,'in modal edit')
    // console.log(this.state,'in STATE modal edit')
    return (
      <div>
        <div className="modal" id="modal-edit">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Data</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="text" className="form-control" name="url" placeholder="Url" onChange={ this.handleOnChange }/><br/>
                <input type="email" className="form-control" name="email" placeholder="Email" onChange={ this.handleOnChange }/><br/>
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={ this.handleOnChange }/><br/>
                <button type="submit" className="btn btn-success" data-toggle="modal" data-target="#modal-edit" onClick={ () => this.handleOnSubmit(this.state) } >Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userEdit: state.userEdit
})

const mapDispatchToProps = dispatch => bindActionCreators({
  handleEditData
}, dispatch)

const connectedFormEdit = connect(mapStateToProps, mapDispatchToProps)(FormEdit)

export default connectedFormEdit;
