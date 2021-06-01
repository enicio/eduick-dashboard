import React, { useState } from 'react';

import './dropdown.css';

function DropDown() {
  const [ dropdown, setDropdown ] = useState(false)

  function toggleDropdown() {
    setDropdown(!dropdown)
  }

  return(
    <div  className="dropdown">
    <button
      onClick={() => toggleDropdown()}
      className="dropbtn">Dropdown
    </button>
    {
      (dropdown)
      ?<div className="dropdown-content">
         <a href="/">Change to teacher mode</a>
       </div>
      : ''
    }
 </div>
  );
}

export default DropDown;
