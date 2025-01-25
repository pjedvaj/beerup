import React, { useState, createContext } from 'react';
import axios from 'axios';

export const BeerupContext = createContext();

export const BeerupProvider = (props) => {

    // const [beers, setBeers] = useState(require('../beers.json')); /* Uses the local JSON file */
    const [beers, setBeers] = useState([]); // Uses the Punk API
    const [page, setPage] = useState(1);
    const [favs, setFavs] = useState([]);
    const [crate, setCrate] = useState([]);
    if (crate.length >= 20) {crate.length = 20};
    const [index, setIndex] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [user, setUser] = useState([{ fullname: '',
                                        email: '',
                                        phone: '',
                                        rsvp: '',
                                        text: '',
                                        mailList: false,
                                        reminder: false }
                            ]);

    /* Toggle modal visibility */
    const toggleModal = (event) => {
        setIndex(event.target.value - 1);
        setHidden(!hidden);
        hidden ? document.body.style.overflowY = 'auto' : document.body.style.overflowY = 'hidden';
        }

    /* Close modal with Esc key */
    const closeModal = (event) => event.key === 'Escape' ? setHidden(true) : null;
    

    /* Toggle beer in favorites */
    const toggleFav = (event) => {
        beers[event.target.value - 1].favorite = !beers[event.target.value - 1].favorite;
        setFavs(beers.filter(liked => liked.favorite === true));
    }

    /* Add beer to crate */
    const addToCrate = (event) => {
        beers[event.target.value - 1].crate = true;
        setCrate(beers.filter(crated => crated.crate === true));
    }

    /* Controlled form changes */
    const handleChange = (event) => {
        const { name, value, type } = event.target;
        type === "checkbox" ? setUser(!user[name]) : setUser(value);
    }

    /* Axios post mockup */
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
        .then(res => {
        console.log(res);
        alert('Thank you for joining!');
        }).catch((error) =>
        console.error(error));
        // alert('Form post failed');
    }

    return(
        <BeerupContext.Provider value={[beers, setBeers, page, setPage, index, setIndex, hasMore, setHasMore, loaded, setLoaded, hidden, setHidden, toggleModal, closeModal, toggleFav, favs, setFavs, addToCrate, crate, setCrate, user, setUser, handleChange, handleSubmit]}>
            {props.children}
        </BeerupContext.Provider>
    );

}