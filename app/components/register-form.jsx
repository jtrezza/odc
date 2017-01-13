import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router';

let RegisterForm = ({toggleLoginForm, handleSubmit, showLogin}) => {
  return (
    <form className="register-form" onSubmit={handleSubmit} style={{display: showLogin ? 'none' : 'block'}}>
      <div className="two-columns-form">
        <div className="column">
          <Field placeholder="Nombre" name="name" component="input" type="text" tabIndex="1" />
          <Field placeholder="E-Mail" name="email" component="input" type="email" tabIndex="3" />
        </div>
        <div className="column">
          <Field placeholder="Empresa" name="company_name" component="input" type="text" tabIndex="2" />
          <Field placeholder="Contraseña" name="password" component="input" type="password" tabIndex="3" />
        </div>
      </div>
      <button>Crear</button>
      <p className="message">¿Usuario existente? <span className="link" onClick={toggleLoginForm}>Ingresar</span></p>
    </form>
  );
};

RegisterForm = reduxForm({
  form: 'register-form',
  fields: ['name', 'email', 'password']
})(RegisterForm);

export default RegisterForm;
