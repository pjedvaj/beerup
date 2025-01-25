import React, { useContext } from 'react';

import { BeerupContext } from '../BeerupContext';
import Illustration from '../../common/assets/illustration.svg';

const Join = () => {

    /* Hooks */
    const [beers, setBeers, page, setPage, index, setIndex, hasMore, setHasMore, loaded, setLoaded, hidden, setHidden, toggleModal, closeModal, toggleFav, favs, setFavs, addToCrate, crate, setCrate, user, setUser, handleChange, handleSubmit] = useContext(BeerupContext);

    return (

        <main className="join">
          <section className="join__jumbotron">
              <h1>BEER UP!</h1>
              <img className="join__illustration" src={Illustration} alt="Beer Box illustration"/>
          </section>
          <section className="join__content">
              <h2>Quick, join up before we<br /> drink all the beer!</h2>
              <article className="join--form--container">
                <form className="join__form" onSubmit={handleSubmit}>
                    <p>PERSONAL INFORMATION</p>
                    <input className="text" type="text" name="fullname" value={user.fullname} onChange={handleChange} placeholder="Full name" required/>
                    <hr></hr>
                    <p>CONTACT INFORMATION</p>
                    <input className="text" type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required/>
                    <input className="text" type="tel" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone number"/>
                    <hr></hr>
                    <p>RSVP</p>
                    <label className="container">
                        <input className="hide" type="radio" name="rsvp" value="yes" onChange={handleChange} defaultChecked/>
                        <span className="radio"></span>
                        I'm coming!
                    </label>
                    <label className="container">
                        <input className="hide" type="radio" name="rsvp" value="maybe" onChange={handleChange}/>
                        <span className="radio"></span>
                        Maybe?
                    </label>
                    <label className="container">
                        <input className="hide" type="radio" name="rsvp" value="no" onChange={handleChange}/>
                        <span className="radio"></span>
                        Can't make it
                    </label>
                    <textarea className="textarea" name="text" placeholder="Something you'd like to add?" onChange={handleChange}>{user.text}</textarea>
                    <hr></hr>
                    <label className="container">
                        <input className="hide" type="checkbox" name="mailList" checked={user.mailList} onChange={handleChange}/>
                        <span className="checkmark"></span>
                        Let me know about future beerups!
                    </label>
                    <label className="container bottom--checkbox">
                        <input className="hide" type="checkbox" name="reminder" checked={user.reminder} onChange={handleChange}/>
                        <span className="checkmark"></span>
                        Remind me one day before this beerup!
                    </label>
                    <button className="form__join__button">JOIN UP</button> 
                </form>
              </article>
          </section>
        </main>

    )

}

export default Join;
