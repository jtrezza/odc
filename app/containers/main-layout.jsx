import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainLayout extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const connectedComponent = connect(mapStateToProps)(MainLayout);
export default connectedComponent;
