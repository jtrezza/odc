import React from 'react';

const FormGroup = ({ input, label, placeholder, type, containerClass,
  meta: { touched, error, warning } }) => {
  return (
    <div className={`form-group ${containerClass}`}>
      <label htmlFor="">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className={touched && error ? 'error' : ''} />
    </div>
  );
};

export default FormGroup;
