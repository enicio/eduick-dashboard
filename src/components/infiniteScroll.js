import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchProduts } from '../service/service';

import './infiniteScroll.css';

import Card from './card';

// const style = {
//   height: 30,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8
// };

function Scroll()  {
  const [ state, setState ] = useState([]);

  const [ products, setProducts ] = useState('')

  useEffect(() => {
    async function fetchData() {
      const store = await fetchProduts('');
      const { items } = store;
     setProducts(items)
    }
    fetchData();
    // setState(store);
  },[])

  function fetchMoreData() {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    // async function fetchData() {
    //   const store = await fetchProduts('');
    //   const { items } = store;
    async function fetchData() {
      const store = await fetchProduts('');
      const { items } = store;
      setProducts(() => products.concat(items))
    }
    fetchData();
    //  setStore(() => store.concat(store))
    // };
    // setState(() =>state.concat(store));

    // setTimeout(() => {
    //   setState([...store]);
    // }, 1500);
  };

  if(!products) return <h4>Loading... </h4>
    return (
      <div>
        <hr />
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {products.map((each) => (
            <Card key={Math.random()} items={each} />
          ))}
        </InfiniteScroll>
      </div>
    );
}

export default Scroll;
