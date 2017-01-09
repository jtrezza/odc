import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {toggleNewMenu} from '../actions/top-bar.js';
import {createOrEditContact} from '../actions/contacts';
import NavItem from '../components/nav-item.jsx';
import TopBar from '../components/top-bar.jsx';
import NewMenu from '../components/new-menu.jsx';
import NewContactModal from '../components/new-contact-modal.jsx';


class App extends Component {

  constructor() {
    super();

    var self = this;

    this.hideNewContactModal = () => self.setState({showNewContactModal: false});
    this.showNewContactModal = () => self.setState({showNewContactModal: true});

    this.state = {
      showNewContactModal: true
    };
  }

  render() {
    let {topBar} = this.props;

    let createContactSubmit = values => this.props.createOrEditContact(values, 'dummy_company');

    return (
      <div className="main-layout">
        <nav className="main-nav">
          <div className="main-nav__logo">
            <span className="logo__text">ODC</span>
          </div>
          <ul className="main-nav__list-items">
            <NavItem url="" icon="fa fa-tachometer" label="Inicio"></NavItem>
            <NavItem url="" icon="fa fa-users" label="Clientes"></NavItem>
            <NavItem url="" icon="fa fa-truck" label="Proveedores"></NavItem>
            <NavItem url="" icon="fa fa-black-tie" label="Empleados"></NavItem>
            <NavItem url="" icon="fa fa-tags" label="Inventarios"></NavItem>
            <NavItem url="" icon="fa fa-exchange" label="Transacciones"></NavItem>
            <NavItem url="" icon="fa fa-bar-chart" label="Reportes"></NavItem>
          </ul>
        </nav>
        <div className="main-layout__panel">
          <TopBar showNewMenu={topBar.showNewMenu} toggleNewMenu={this.props.toggleNewMenu} />
          <div className="panel-content">
            {topBar.showNewMenu && <NewMenu />}
            {this.props.children}
          </div>
        </div>

        <NewContactModal initialValues={{
            is_customer: true, 
            identification_type: 'NIT',
            taxpayer_type: 'PJ',
            state: '08',
            city: '08001'}} isOpen={this.state.showNewContactModal}
          onSubmit={createContactSubmit} hideModal={this.hideNewContactModal} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topBar: state.topBar,
    firebase: state.firebase,
    currentUser: state.firebase.auth().currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleNewMenu, createOrEditContact
  }, dispatch);
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedComponent;
