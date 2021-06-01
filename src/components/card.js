import React from 'react';
import ReactStars from "react-rating-stars-component";

import './card.css';
function Card() {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return(
    <div className="card">
      <img src='./assets/card_image.png' className="card__image" alt="card"/>
      <div className="card__rating__And__lessons">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          className="card__ranking"
        />
        <span className="card__quantity__of__lessons"> 10 LESSONS</span>
      </div>
      <h2 className="card__title">Master English: Improve Your Speaking </h2>
    </div>

  );
}

export default Card;