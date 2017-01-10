import React from 'react';
import { Link } from 'react-router';

export default ({url, icon, label}) => {
  return (
    <Link className="nav-item" to={url}>
      <span className={`nav-item__icon ${icon}`}></span><span>{label}</span>
    </Link>
  );
};
