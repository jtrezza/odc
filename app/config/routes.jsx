import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import MainLayout from '../containers/main-layout.jsx';
import Dashboard from '../components/dashboard.jsx';
import HomePage from '../containers/home-page.jsx';
import NoMatch from '../containers/no-match.jsx';
import BlankLayout from '../containers/blank-layout.jsx';

function wrapComponent(Comp, props) {
  return class Wrapper extends Component {
    render() {
      return React.createElement(Comp, Object.assign({}, this.props, props));
    }
  };
}

export default ({history}) => {
    return <Router history={history}>
      <Route path="/" component={BlankLayout}>
        <IndexRoute component={HomePage} />
        <Route path="app" component={MainLayout}>

        </Route>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>;
};
