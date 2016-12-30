import React from 'react';
import { Link } from 'react-router';

export default ({url, icon, label}) => {
  return (
    <div className="nav-item">
      <Link to={url}>
        <span className={`nav-item__icon ${icon}`}></span><span>{label}</span>
      </Link>
    </div>
  );
};
