import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserMenu extends Component {

  render() {
    let {firebase} = this.props;

    return (
      <div className="user-menu">
        <span className="user-menu__item" onClick={e => firebase.auth().signOut()}>Cerrar Sesión</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    firebase: state.firebase
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch);
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(UserMenu);
export default connectedComponent;
