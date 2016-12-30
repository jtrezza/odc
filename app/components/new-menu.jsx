import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="new-menu">
        <div className={this.props.hidden ? 'menu-tip menu-hidden' : 'menu-tip'}></div>
        <div className={this.props.hidden ? 'new-menu__content menu-hidden' : 'new-menu__content'}>oaisdjfoiasdjf</div>
      </div>
    );
  }
}
