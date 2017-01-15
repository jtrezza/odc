import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Dashboard from '../components/dashboard.jsx';
import Customers from '../containers/customers.jsx';
import Suppliers from '../containers/suppliers.jsx';
import HomePage from '../containers/home-page.jsx';
import NoMatch from '../containers/no-match.jsx';
import MainLayout from '../containers/main-layout.jsx';
import {APP} from '../constants/urls';
import App from '../containers/app.jsx';

function wrapComponent(Comp, props) {
  return class Wrapper extends Component {
    render() {
      return React.createElement(Comp, Object.assign({}, this.props, props));
    }
  };
}

export default ({history}) => {
    return <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={HomePage} />
        <Route path={APP} component={App}>
          <Route path={`${APP}/customers`} component={Customers} />
          <Route path={`${APP}/suppliers`} component={Suppliers} />
        </Route>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>;
};
