import React from 'react';
import DropDown from './dropdown';
import UserIcon from './userIcon';

import './header.css';

function Header() {

  return(
    <header className="header">
      <div className="header___left_icons">
        <img className="header__group_dots" src='./assets/group_dots.svg' alt="logo" />
        <img className="header__logo" src='./assets/logo.svg' alt="logo" />
        <a className="header__my_classes" href="/" >My Classes</a>
      </div>

      <div className="hearder__rigth_icons">
        <DropDown />
        <UserIcon />
      </div>
    </header>
  );
}

export default Header;
