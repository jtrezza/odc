import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RegisterForm from '../components/register-form.jsx';
import LoginForm from '../components/login-form.jsx';

import { toggleLoginForm } from '../actions/login-page';

class HomePage extends Component {

  render() {
    let {topBar, showLogin, firebase} = this.props;

    let handleRegisterSubmit = fireb => (values) => {
      let {name, email, password} = values;
      fireb.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.updateProfile({
          displayName: name
        }).then(() => {
          console.info('Se ha cambiado el nombre ',user);
        })
        console.info('usuario registrado ', user);
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
        console.info('Usuario logueado ',user);
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
    showLogin: state.loginForm.showLogin,
    firebase: window.firebase,
    currentUser: window.firebase.auth().currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleLoginForm
  }, dispatch);
};
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default connectedComponent;
