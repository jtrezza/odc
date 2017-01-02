import React from 'react';
import {connect} from 'react-redux';

const TopBar = ({showNewMenu, toggleNewMenu}) => (
      <div className="main-top-bar">
        <div className="top-bar--left">
        </div>
        <div className="top-bar--middle">
          <div className="new-button" onClick={toggleNewMenu}>
            <span className={`fa fa-plus-circle new-button__icon${showNewMenu ? ' close' : ''}`}></span>
          </div>
        </div>
        <div className="top-bar--right">
          <div className={`top-bar__button${true && ' '}`}>
            <span className="top-bar__button-icon fa fa-user"></span><span className="top-bar__button-label">'Droguería Luzma'</span>
          </div>
        </div>
      </div>
    );

export default TopBar;
