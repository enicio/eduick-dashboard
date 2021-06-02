import React, { useState, useEffect } from 'react';
import './dropdown.css';

// const Window = require('window');
// const window = new Window();


function DropDown() {
  const [ dropdown, setDropdown ] = useState(false);

  useEffect(() => {
    if(window.innerWidth > 400) setDropdown(true);
  },[])

  function toggleDropdown() {
    setDropdown(!dropdown)
  }
  let timeoutId = null;

  function handleResize() {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if(window.innerWidth > 400) setDropdown(true);
      if(window.innerWidth < 400) setDropdown(false);
    }, 200);
  }

  window.addEventListener('resize', handleResize)
  return(
    <div  className="dropdown">
    <button
      onClick={() => toggleDropdown()}
      className="dropbtn">
        <img className={(dropdown)
          ? "dropdown__arrow__down"
          : "dropdown__arrow__up"}
          src="assets/arrow.svg"
          alt="arrow"
        />
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
