import React, { useContext } from 'react';
import { BeerupContext } from '../BeerupContext';

import Cap from '../../common/assets/bottle draft.png';

const Aside = () => {

    /* Hooks */
    const [beers, setBeers, page, setPage, index, setIndex, hasMore, setHasMore, loaded, setLoaded, hidden, setHidden, toggleModal, closeModal, toggleFav, favs, setFavs, addToCrate, crate, setCrate, user, setUser, handleChange, handleSubmit] = useContext(BeerupContext);

    return (
        <aside className="crate">
            <h2>Crate</h2>
            <div className="crate__links">
                <span className="crate__one crate--active">ONE</span>
                <span className="crate__two">TWO</span>
                <span className="crate__three">THREE</span>
            </div>
            <div className="crate__container">
                {crate.map(bottle => 
                                    <input type="image" className="crate__bottle" key={bottle.id + 1} src={Cap} alt={bottle.name} title={bottle.name} value={bottle.id} onClick={event => toggleModal(event)} />
                                    )
                                }
            </div>
            <div className="crate__text">
                <p>Add a beer to have it appear in the crate.</p>
                <small>-- Captain Obvious</small>
                <p>{crate.length}</p>
            </div>
        </aside>
    )
}

export default Aside;