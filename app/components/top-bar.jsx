import React from 'react';
import {connect} from 'react-redux';

const TopBar = ({newMenuState, click}) => (
      <div className="main-top-bar">
        <div className="top-bar--left">
        </div>
        <div className="top-bar--middle">
          <div className="new-button">
            <span className="fa fa-plus new-button__icon"></span>
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
