import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router';

let RegisterForm = ({toggleLoginForm, handleSubmit, showLogin}) => {
  return (
    <form className="register-form" onSubmit={handleSubmit} style={{display: showLogin ? 'none' : 'block'}}>
      <Field placeholder="Nombre" name="name" component="input" type="text"/>
      <Field placeholder="Correo Electrónico" name="email" component="input" type="email"/>
      <Field placeholder="Contraseña" name="password" component="input" type="password"/>
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
