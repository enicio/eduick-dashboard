import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchClasses } from '../service/service';
import Card from './card';

import './infiniteScroll.css';

function Scroll()  {
  const [ products, setProducts ] = useState('')

  useEffect(() => {
    async function fetchData() {
      const classes = await fetchClasses('');
     setProducts(classes)
    }
    fetchData();
  },[])

  function fetchMoreData() {

    async function fetchData() {
      const classes = await fetchClasses('');
      setProducts(() => products.concat(classes))
    }
    fetchData();
  };

  if(!products) return <h4 className="infiniteScroll__loading">Loading... </h4>
    return (
      <div>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<div className="infiniteScroll__loading"> <h4 >Loading...</h4> </div>}
        >
          {products.map((each) => (
            <Card key={Math.random()} classes={each} />
          ))}
        </InfiniteScroll>
      </div>
    );
}

export default Scroll;
