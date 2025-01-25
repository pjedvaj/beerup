import React, { useContext } from 'react';

import { BeerupContext } from '../BeerupContext';
import Card from './Card';
import Modal from './Modal';
import Aside from './Aside';

import Illustration from '../../common/assets/illustration.svg';

const Favorites = () => {

    const [beers, setBeers, page, setPage, index, setIndex, hasMore, setHasMore, loaded, setLoaded, hidden, setHidden, toggleModal, closeModal, toggleFav, favs, setFavs, addToCrate, crate, setCrate, user, setUser, handleChange, handleSubmit] = useContext(BeerupContext);

    return (
        <main className="favorites" >
            <section className="favorites__jumbotron">
                <h1>FAVOURITES</h1>
                <img className="favorites__illustration" src={Illustration} alt="Beer Box illustration"/>
            </section>
            <section className="favorites__content">
                <div className="favorites--container">
                    <article className="favorites__beer">
                        <h2 className="favorites__title">My favourite beers</h2>

                        <div className="favorites__list">

                            {favs.map(beer => 
                                <Card key={beer.id + 1}
                                      beer={beer}
                                      toggleFav={toggleFav}
                                      toggleModal={toggleModal} />
                                )
                            }
                                
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

export default Favorites;
