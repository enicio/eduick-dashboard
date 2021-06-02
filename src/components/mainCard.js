import React from 'react';

import './mainCard.css';


function MainCard() {
  return(
    <div className="mainCard">
      <img className="mainCard__shape-yellow" src="assets/yellow-shape.svg" alt="yellow"/>
      <div>
      <h1>Hello <b> Student </b> <i>.</i> </h1>
      <p className="mainCard__paragraph">
        Whether you are a student trying <br/>
        to find your ideal private language <br/>
        teachers/tutors
      </p>
      </div>
      <img className="mainsCard__peoples_on_meeting" src="assets/peoples_on_meeting.png" alt="Peoples on meeting" />
    </div>
  );
}

export default MainCard;