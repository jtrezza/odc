import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RegisterForm from '../components/register-form.jsx';
import LoginForm from '../components/login-form.jsx';
import { userInfoLoaded } from '../actions/login';

import { toggleLoginForm } from '../actions/login';

class HomePage extends Component {

  render() {
    let {topBar, showLogin, firebase} = this.props;

    let handleRegisterSubmit = fireb => (values) => {
      let {name, company_name, email, password} = values, that = this;
      fireb.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.updateProfile({
          displayName: name,
          companyName: company_name
        });
      })
      .catch(e => {
        let errorCode = e.code;
        let errorMessage = e.message;
      });
    };
    let handleLoginSubmit = fireb => (values) => {
      let {email, password} = values;
      fireb.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        that.props.userInfoLoaded();
      })
      .catch((e) => {
        let errorCode = e.code;
        let errorMessage = e.message;
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
    toggleLoginForm, userInfoLoaded
  }, dispatch);
};
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default connectedComponent;
