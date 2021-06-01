import React from 'react';
import DropDown from './dropdown';
import UserIcon from './userIcon';

import './header.css';

function Header() {

  return(
    <header className="header">
      <img className="header__logo" src='./assets/logo.svg' alt="logo" />
      <div className="hearder__left_icons">
        <DropDown />
        <UserIcon />
      </div>
    </header>
  );
}

export default Header;
