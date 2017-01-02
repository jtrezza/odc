import React from 'react';
import Modal from 'react-modal';
import {modalStyles} from '../constants/common';

export default class PreviousDayModal extends React.Component {

  render() {
    let {hideModal} = this.props;

    return (
      <Modal
        isOpen={true}
        onRequestClose={hideModal}
        contentLabel="Modal"
        style={modalStyles}>
        <div className="modal-window">
          <button className="modal-window__close-btn" onClick={hideModal}><span className="fa fa-close"></span></button>
          <h1 className="modal-header">Nuevo Proveedor</h1>
          <div className="two-columns-form">
            <div className="column">
              <div className="row">
                <div className="form-group one-fifth">
                  <label htmlFor="">Tipo ID</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group two-fifths">
                  <label htmlFor=""># identificación</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group two-fifths">
                  <label htmlFor="">Tipo Persona</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-ninth">
                  <label htmlFor="">Sr./Sra.</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group two-ninths">
                  <label htmlFor="">P. Nombre</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group two-ninths">
                  <label htmlFor="">S. Nombre</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group two-ninths">
                  <label htmlFor="">P. Apellido</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group two-ninths">
                  <label htmlFor="">S. Apellido</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-whole">
                  <label htmlFor="">Razón social</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-whole">
                  <label htmlFor="">Mostrar Como</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-fifth">
                  <label htmlFor="">Dirección</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group one-tenth relative">
                  <span className="center-text">#</span>
                </div>
                <div className="form-group one-tenth">
                  <label htmlFor="">&nbsp;</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group one-tenth relative">
                  <span className="center-text">-</span>
                </div>
                <div className="form-group one-tenth">
                  <label htmlFor="">&nbsp;</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group two-fifths">
                  <label htmlFor="">Adicional</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-half">
                  <label htmlFor="">Departamento</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group one-half">
                  <label htmlFor="">Ciudad</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <div className="form-group one-whole">
                  <label htmlFor="">Email</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-third">
                  <label htmlFor="">Tel. fijo</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group one-third">
                  <label htmlFor="">Celular</label>
                  <input id="js-" type="text"/>
                </div>
                <div className="form-group one-third">
                  <label htmlFor="">Fax</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group one-whole">
                  <label htmlFor="">Notas</label>
                  <input id="js-" type="text"/>
                </div>
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button className="btn default">Cancelar</button>
            <button className="btn primary float-right">Guardar</button>
          </div>
        </div>
      </Modal>
    );
  }
}
