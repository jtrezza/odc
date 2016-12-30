import React from 'react';
import {connect} from 'react-redux';

import NewMenu from '../components/new-menu.jsx';

const TopBar = ({newMenuState, click}) => (
      <div className="main-top-bar">
        <div className="top-bar--left top-bar__part">

          <NewMenu hidden={!newMenuState} ></NewMenu>
        </div>
        <div className="top-bar--middle top-bar__part">
          <div className="search-box">
            <input type="text" className="search-box__input" placeholder="Buscar transacciones"/><span className="fa fa-search search-box__magnifier"></span>
          </div>
        </div>
        <div className="top-bar--right top-bar__part">
          <div className={`top-bar__button${true && ' '}`}>
            <span className="top-bar__button-icon fa fa-user"></span><span className="top-bar__button-label">'Droguería Luzma'</span>
          </div>
        </div>
      </div>
    );

export default TopBar;
