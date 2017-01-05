import React, {Component} from 'react';

class MainLayout extends Component {

  render() {
    return (
      <div className="blank-layout">
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
