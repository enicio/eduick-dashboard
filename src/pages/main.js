import React from 'react';
import Card from '../components/card'

import Scroll from '../components/infiniteScroll';

import './main.css';

function Main() {
  return(
    <div className="main">
      <div className="card__container">
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
        <Scroll />

      </div>
    </div>
  );
}

export default Main;
