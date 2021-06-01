import React from 'react';
import DropDown from './dropdown';

import './header.css';

function Header() {

  return(
    <header className="header">
      <img className="header__logo" src='./assets/logo.svg' alt="logo" />
      {/* { (dropdown)? <span >C</span> : <span>B</span>} */}
      <DropDown />
    </header>
  );
}

export default Header;
