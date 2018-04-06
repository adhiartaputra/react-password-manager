import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, deleteUser } from '../store/users/actions/';
import { User } from '../firebase';
import Navbar from '../components/Navbar';
import Header from './Header';
import FormEdit from './FomEdit'
import Login from './Login'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      detailData: []
    }
  }

  componentDidMount() {
    User.onSnapshot( () => {
      this.props.fetchUser()
    })
  }
  
  handleEdit(payload) {
    this.setState({
      detailData: payload
    })
  }

  handleDelete(userId) {
    this.props.deleteUser(userId)
  }

  render() {
    const emailLocal = localStorage.getItem('email')
    return (
      <div>
        <Navbar/>
        <div className="container">
        <Header/>
        <h1 style={{textAlign:"center", paddingBottom:"10px"}}>Your Password List</h1>
          <table className="table table-hover">
              <thead>
                <tr style={{textAlign:"center"}}>
                  <th scope="col">Url</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Updated At</th>
                  <th scope="col">Action</th>
                </tr>
                {
                  this.props.users.map(user => (
                    <tr className="table-secondary" key={user.id}>
                      <td>{user.url}</td>
                      <td>{user.email}</td>
                      { emailLocal !== null ?
                        <td>{user.password} </td>
                        :
                        <td>********** <button className="btn btn-warning" data-toggle="modal" data-target="#modal-login" onClick={ () => this.handleEdit(user) }>Open</button> </td>
                      }
                      <td>{user.createdAt}</td>
                      <td>{user.updatedAt}</td>
                      <td>
                        <button className="btn btn-info" data-toggle="modal" data-target="#modal-edit" onClick={ () => this.handleEdit(user) }>Edit</button>&nbsp;
                        <button className="btn btn-danger">Delete</button>
                      <FormEdit user={ this.state.detailData } />
                      </td>
                    </tr>
                  ))
                }
              </thead>
            </table>
            <Login user={ this.state.detailData }/>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  users: state.Users.listData,
  loading: state.Users.loading,
  error: state.Users.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser, deleteUser
}, dispatch)

const connectedUserHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default connectedUserHome;

