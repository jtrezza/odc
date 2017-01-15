import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, minLength, email} from '../helpers/validation';

let RegisterForm = ({toggleLoginForm, handleSubmit, showLogin, submitting}) => {
  const MIN_LENGTH = 4, EMAIL_LENGTH = 7;

  return (
    <form className="register-form" onSubmit={handleSubmit} style={{display: showLogin ? 'none' : 'block'}}>
      <div className="two-columns-form">
        <div className="column">
          <Field placeholder="Nombre" name="name" component="input" type="text"
            validate={[required, minLength(MIN_LENGTH)]} tabIndex="1" />
          <Field placeholder="E-Mail" name="email" component="input" type="email"
            validate={[required, minLength(EMAIL_LENGTH), email]} tabIndex="3" />
        </div>
        <div className="column">
          <Field placeholder="Empresa" name="company_name" component="input"
            validate={[required, minLength(MIN_LENGTH)]} type="text" tabIndex="2" />
          <Field placeholder="Contraseña" name="password" component="input"
            validate={[required, minLength(MIN_LENGTH)]} type="password" tabIndex="3" />
        </div>
      </div>
      <button type="submit" disabled={submitting}>Crear</button>
      <p className="message">¿Usuario existente? <span className="link" onClick={toggleLoginForm}>Ingresar</span></p>
    </form>
  );
};

export default reduxForm({
  form: 'register-form',
  fields: ['name', 'email', 'password']
})(RegisterForm);
