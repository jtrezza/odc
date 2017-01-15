import React from 'react';
import {connect} from 'react-redux';

const TopBar = ({showNewMenu, showUserMenu, toggleNewMenu, currentUser, toggleUserMenu}) => {

  var newMenuCb = e => {
    e.stopPropagation();
    toggleNewMenu();
  };
  var userMenuCb = e => {
    e.stopPropagation();
    toggleUserMenu();
  };
  return (
      <div className="main-top-bar">
        <div className="top-bar--left">
        </div>
        <div className="top-bar--middle">
          <div className="new-button" onClick={newMenuCb}>
            <span className={`fa fa-plus-circle new-button__icon${showNewMenu ? ' close' : ''}`}></span>
          </div>
        </div>
        <div className="top-bar--right">
          <span className={`top-bar__button${showUserMenu ? ' hover' : ''}`} onClick={userMenuCb}>
            <span className="top-bar__button-icon fa fa-user"></span><span className="top-bar__button-label">{currentUser ? currentUser.displayName : ''}</span>
          </span>
        </div>
      </div>
    );
  };

export default TopBar;
