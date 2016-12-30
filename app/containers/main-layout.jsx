import React, {Component} from 'react';
import NavItem from '../components/nav-item.jsx';
import TopBar from '../components/top-bar.jsx';
import {connect} from 'react-redux';

class MainLayout extends Component {

  render() {
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
          <TopBar />
          <div className="panel-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const connectedComponent = connect(mapStateToProps)(MainLayout);
export default connectedComponent;
