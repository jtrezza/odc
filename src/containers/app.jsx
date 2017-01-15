import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {APP} from '../constants/urls';
import {toggleNewMenu, toggleUserMenu, hideAllMenus} from '../actions/top-bar.js';
import {createOrEditContact} from '../actions/contacts';
import {hideNewContactModal} from '../actions/new-contact-modal';
import NavItem from '../components/nav-item.jsx';
import TopBar from '../components/top-bar.jsx';
import NewMenu from '../components/new-menu.jsx';
import NewContactModal from '../components/new-contact-modal.jsx';
import UserMenu from './user-menu.jsx';

class App extends Component {

  render() {
    let {topBar, newContactModalIsOpen, currentUser} = this.props;
    let createContactSubmit = values => this.props.createOrEditContact(values, 'dummy_company');

    return (
      <div className="main-layout" onClick={this.props.hideAllMenus}>
        <nav className="main-nav">
          <div className="main-nav__logo">
            <span className="logo__text">ODC</span>
          </div>
          <ul className="main-nav__list-items">
            <NavItem url={`${APP}`} icon="fa fa-tachometer" label="Inicio"></NavItem>
            <NavItem url={`${APP}/customers`} icon="fa fa-users" label="Clientes"></NavItem>
            <NavItem url={`${APP}/suppliers`} icon="fa fa-truck" label="Proveedores"></NavItem>
            <NavItem url={`${APP}/employees`} icon="fa fa-black-tie" label="Empleados"></NavItem>
            <NavItem url={`${APP}/inventory`} icon="fa fa-tags" label="Inventarios"></NavItem>
            <NavItem url={`${APP}/transactions`} icon="fa fa-exchange" label="Transacciones"></NavItem>
            <NavItem url={`${APP}/reports`} icon="fa fa-bar-chart" label="Reportes"></NavItem>
          </ul>
        </nav>
        <div className="main-layout__panel">
          <TopBar showNewMenu={topBar.showNewMenu} showUserMenu={topBar.showUserMenu} currentUser={currentUser}
            toggleNewMenu={this.props.toggleNewMenu} toggleUserMenu={this.props.toggleUserMenu} />
          <div className="panel-content">
            {topBar.showNewMenu && <NewMenu />}
            {this.props.children}
            {topBar.showUserMenu && <UserMenu />}
          </div>
        </div>

        <NewContactModal initialValues={{
            is_customer: true,
            identification_type: 'NIT',
            taxpayer_type: 'PJ',
            state: '08',
            city: '08001'}} isOpen={newContactModalIsOpen}
          onSubmit={createContactSubmit} hideModal={this.props.hideNewContactModal} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topBar: state.topBar,
    firebase: state.firebase,
    currentUser: state.firebase.auth().currentUser,
    newContactModalIsOpen: state.newContactModal.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleNewMenu, createOrEditContact, hideNewContactModal, toggleUserMenu,
    hideAllMenus
  }, dispatch);
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedComponent;
