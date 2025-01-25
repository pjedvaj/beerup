import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { BeerupContext } from '../BeerupContext';
import InfiniteScroll from "react-infinite-scroll-component";

import Card from './Card';
import Modal from './Modal';
import Aside from './Aside';

import Illustration from '../../common/assets/illustration.svg';
import Cap from '../../common/assets/cap.svg';

const Main = () => {

    /* Hooks */
    const [beers, setBeers, page, setPage, index, setIndex, hasMore, setHasMore, loaded, setLoaded, hidden, setHidden, toggleModal, closeModal, toggleFav, favs, setFavs, addToCrate, crate, setCrate, user, setUser, handleChange, handleSubmit] = useContext(BeerupContext);

    /* Get data from Punk API - https://punkapi.com/documentation/v2 */
    useEffect(() => {
      axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=24') 
      .then(res => {
        setLoaded(true)
        setBeers(res.data)
      })
      .catch((error) =>
      console.error(error));
    }, [setBeers, setLoaded]);

    /* Get more beers (react-infinite-scroll-component) */
    const getMoreBeers = () => beers.length >= 128 ? setHasMore(false) :

      setTimeout(() => {
          axios.get(`https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=24`)
          .then(res => {
            setLoaded(true)
            setBeers(prevBeers => [...prevBeers, ...res.data])
            setPage(page + 1)
          })
          .catch((error) =>
          console.error(error))
      }, 1000);
  
    return (
      <main className="main" >
        <NavLink className="main__join__button" exact to="/join">JOIN BEERUP</NavLink>
        <section className="main__jumbotron">
          <p className="main__intro">THE BEERSTER PRO 2.0</p>
          <h1 className="main__headline">JOIN OUR FAMOUS BEERUP</h1>
          <img className="main__illustration" src={Illustration} alt="Beer Box illustration"/>
        </section>
        <section className="main__content">
          <img className="main__cap" src={Cap} alt="Beerup cap"/>
          <div className="main--container">
            <article className="beer">
              <h2 className="main__title">Beer</h2>
              <div className="beerlist">

                <InfiniteScroll
                  dataLength={beers.length}
                  next={getMoreBeers}
                  hasMore={hasMore}
                  loader={<p>Loading more beers...</p>}
                  endMessage={<p style={{ textAlign: "center" }}>No more beers for you.</p>}
                  refreshFunction={getMoreBeers}
                  pullDownToRefresh
                  pullDownToRefreshContent={
                    <p style={{ textAlign: "center" }}>Pull down to refresh</p>
                  }
                  releaseToRefreshContent={
                    <p style={{ textAlign: "center" }}>Release to refresh</p>
                  }>

                  {beers.map(beer =>
                    <Card key={beer.id}
                          beer={beer}
                          toggleFav={toggleFav}
                          toggleModal={toggleModal} />
                    )}

                </InfiniteScroll>

                </div>
            </article>

            <Aside />

          </div>
        </section>
        
        { hidden ? (

          <Modal beer={beers[index]}
                 toggleModal={toggleModal}
                 closeModal={closeModal}
                 toggleFav={toggleFav}
                 addToCrate={addToCrate}/>

        ) : null }
        
    </main>
  )

}
  
export default Main;
