import React from 'react';
import Modal from 'react-modal';
import {modalStyles} from '../constants/common';
import {createOptionsFromSeed} from '../helpers/forms';
import {Field, reduxForm} from 'redux-form';
import FormGroup from './form-group.jsx';

import {required, minLength} from '../helpers/validation';
import {identification_types, taxpayer_types, cities,
  states} from '../constants/seeds';

const NewContactModal = ({hideModal, isOpen, handleSubmit, submitting,
  pristine}) => {

  const idTypesOpts = createOptionsFromSeed(identification_types);
  const TaxPTypesOpts = createOptionsFromSeed(taxpayer_types);
  const statesOpts = createOptionsFromSeed(states);
  const citiesOpts = createOptionsFromSeed(cities);
  const MIN_LENGTH = 4;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={hideModal}
      contentLabel="Modal"
      style={modalStyles}>
      <div className="modal-window">
        <button className="modal-window__close-btn" onClick={hideModal}><span className="fa fa-close"></span></button>
        <h1 className="modal-header">Nuevo Tercero</h1>
        <form onSubmit={handleSubmit} >
          <div className="two-columns-form">
            <div className="column">
              <div className="row">
                <div className="form-group one-fifth">
                  <div>
                    <label htmlFor="">Tipo ID</label>
                    <Field name="identification_type" component="select">
                      {idTypesOpts}
                    </Field>
                  </div>
                </div>
                <div className="form-group two-fifths">
                  <label htmlFor=""># Identificación</label>
                  <Field name="identification_number" component="input" type="text" />
                </div>
                <div className="form-group two-fifths">
                  <label htmlFor="">Tipo Persona</label>
                  <Field name="taxpayer_type" component="select">
                    {TaxPTypesOpts}
                  </Field>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-ninth">
                  <label htmlFor="">Sr./Sra.</label>
                  <Field name="title" component="input" type="text" />
                </div>
                <Field name="first_name" type="text" label="P. Nombre"
                  containerClass="two-ninths" component={FormGroup} />
                <div className="form-group two-ninths">
                  <label htmlFor="">S. Nombre</label>
                  <Field name="middle_name" component="input" type="text" />
                </div>
                <div className="form-group two-ninths">
                  <label htmlFor="">P. Apellido</label>
                  <Field name="last_name" component="input" type="text" />
                </div>
                <div className="form-group two-ninths">
                  <label htmlFor="">S. Apellido</label>
                  <Field name="mothers_maiden_name" component="input" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="form-group one-whole">
                  <label htmlFor="">Razón social</label>
                  <Field name="company_name" component="input" type="text" />
                </div>
              </div>
              <div className="row">
                <Field name="display_as" type="text" label="Mostrar Como"
                  containerClass="one-whole" component={FormGroup}
                  validate={[required, minLength(MIN_LENGTH)]} />
              </div>
              <div className="row">
                <div className="form-group one-fifth">
                  <label htmlFor="">Dirección</label>
                  <Field name="street_name" component="input" type="text" placeholder="CL / CR 0" />
                </div>
                <div className="form-group one-tenth relative">
                  <span className="center-text">#</span>
                </div>
                <div className="form-group one-tenth">
                  <label htmlFor="">&nbsp;</label>
                  <Field name="address_first_number" component="input" type="text" placeholder="00" />
                </div>
                <div className="form-group one-tenth relative">
                  <span className="center-text">-</span>
                </div>
                <div className="form-group one-tenth">
                  <label htmlFor="">&nbsp;</label>
                  <Field name="address_second_number" component="input" type="text" placeholder="00" />
                </div>
                <div className="form-group two-fifths">
                  <label htmlFor="">Adicional</label>
                  <Field name="address_extra" component="input" type="text" placeholder="EDIFICIO / APTO."/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-half">
                  <label htmlFor="">Departamento</label>
                    <Field name="city" component="select">
                      {statesOpts}
                    </Field>
                </div>
                <div className="form-group one-half">
                  <label htmlFor="">Ciudad</label>
                    <Field name="city" component="select">
                      {citiesOpts}
                    </Field>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <div className="form-group one-half">
                  <label htmlFor="">Email</label>
                  <Field name="email" component="input" type="text" />
                </div>
                <div className="form-group one-half">
                  <label htmlFor="">Sitio Web</label>
                  <Field name="website" component="input" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="form-group one-third">
                  <label htmlFor="">Tel. fijo</label>
                  <Field name="phone" component="input" type="text" />
                </div>
                <div className="form-group one-third">
                  <label htmlFor="">Celular</label>
                  <Field name="cell_phone" component="input" type="text" />
                </div>
                <div className="form-group one-third">
                  <label htmlFor="">Fax</label>
                  <Field name="fax" component="input" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="form-group one-half">
                  <label htmlFor="">Es Cliente</label>
                  <Field name="is_customer" component="input" type="checkbox" />
                </div>
                <div className="form-group one-half">
                  <label htmlFor="">Es proveedor</label>
                  <Field name="is_supplier" component="input" type="checkbox" />
                </div>
              </div>
              <div className="row">
                <div className="form-group one-whole">
                  <label htmlFor="">Notas</label>
                  <Field name="notes" component="input" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button className="btn default" type="button" onClick={hideModal} disabled={submitting}>Cancelar</button>
            <button className="btn primary float-right" type="submit" disabled={submitting}>Guardar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default reduxForm({
  form: 'newContact'
})(NewContactModal);
