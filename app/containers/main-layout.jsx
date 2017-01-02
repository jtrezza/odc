import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {toggleNewMenu} from '../actions/top-bar.js';
import NavItem from '../components/nav-item.jsx';
import TopBar from '../components/top-bar.jsx';
import NewMenu from '../components/new-menu.jsx';
import NewSupplierModal from '../components/new-supplier-modal.jsx';


class MainLayout extends Component {

  render() {
    let {topBar} = this.props;

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

        <NewSupplierModal hideModal={e => true} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topBar: state.topBar
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleNewMenu
  }, dispatch);
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(MainLayout);
export default connectedComponent;
