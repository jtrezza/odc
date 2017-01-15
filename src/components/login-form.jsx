import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router';

let LoginForm = ({toggleLoginForm, handleSubmit, showLogin}) => {
  return (
    <form className="login-form" onSubmit={handleSubmit} style={{display: showLogin ? 'block' : 'none'}}>
      <Field placeholder="Correo Electrónico" name="email" component="input" type="email"/>
      <Field placeholder="Contraseña" name="password" component="input" type="password"/>
      <button>Entrar</button>
      <p className="message">¿Usuario nuevo? <span className="link" onClick={toggleLoginForm}>Crear una cuenta</span></p>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login-form'
})(LoginForm);

export default LoginForm;
