import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RegisterForm from '../components/register-form.jsx';
import LoginForm from '../components/login-form.jsx';
import { loadUserInfo } from '../actions/login';
import { createOrEditCompany } from '../actions/companies';
import { createUser } from '../actions/users';

import { toggleLoginForm } from '../actions/login';

class HomePage extends Component {

  render() {
    let {topBar, showLogin, firebase} = this.props, that = this;

    let handleRegisterSubmit = fireb => (values) => {
      let {name, company_name, email, password} = values;
      fireb.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.updateProfile({displayName: name});
        let userIds = {}; userIds[user.uid] = true;
        that.props.createOrEditCompany({displayName: company_name, userIds})
        .then(company => {
          return that.props.createUser({
            displayName: name, company, email, id: user.uid
          });
        })
        .then(({id}) => {
          that.props.loadUserInfo(id);
        });
      })
      .catch(e => {
        let errorMessage = `Error ${e.code}: ${e.message}`;
      });
    };
    let handleLoginSubmit = fireb => (values) => {
      let {email, password} = values;
      fireb.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        that.props.loadUserInfo(user.uid);
      })
      .catch((e) => {
        let errorMessage = `Error ${e.code}: ${e.message}`;
      });
    };
    return (
      <div className="home-page">
        <div className="login-page">
          <h1 className="title">ODC</h1>
          <div className="form">
            <LoginForm onSubmit={handleLoginSubmit(firebase)} toggleLoginForm={this.props.toggleLoginForm} showLogin={showLogin} />
            <RegisterForm onSubmit={handleRegisterSubmit(firebase)} toggleLoginForm={this.props.toggleLoginForm} showLogin={showLogin} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    showLogin: state.login.showLogin,
    firebase: state.firebase,
    currentUser: state.firebase.auth().currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleLoginForm, loadUserInfo, createOrEditCompany, createUser
  }, dispatch);
};
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default connectedComponent;
