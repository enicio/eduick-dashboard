import React from 'react';

import './mainCard.css';


function MainCard() {
  return(
    <div className="mainCard">
      <h1>Hello <b> Student </b> <i>.</i> </h1>
      <p className="mainCard__paragraph">
        Whether you are a student trying <br/>
        to find your ideal private language <br/>
        teachers/tutors
      </p>
      <img className="mainCard__shape-yellow" src="assets/yellow-shape.svg" alt="yellow"/>
    </div>

  );
}

export default MainCard;