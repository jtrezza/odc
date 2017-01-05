import React, {Component} from 'react';

class BlankLayout extends Component {

  render() {
    return (
      <div className="blank-layout">
        {this.props.children}
      </div>
    );
  }
}

export default BlankLayout;
