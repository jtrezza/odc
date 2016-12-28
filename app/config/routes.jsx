import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import MainLayout from '../containers/main-layout.jsx';
import Dashboard from '../components/dashboard.jsx';

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
        <IndexRoute component={Dashboard} />
      </Route>
    </Router>;
};
