import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {showNewContactModal} from '../actions/new-contact-modal';

class Customers extends Component {

  render() {

    return (
      <div>
        <div className="row">
          <div className="one-half"><h1 className="header">Clientes</h1></div>
          <div className="one-half"><button onClick={this.props.showNewContactModal} className="btn primary float-right" type="submit">Nuevo Cliente</button></div>
        </div>
        <div className="row">
          <div className="one-whole">
            <table>
              <thead>
                <tr>
                  <th>Cliente / Compañía</th>
                  <th>Teléfono</th>
                  <th>Balance</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showNewContactModal
  }, dispatch);
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Customers);
export default connectedComponent;
