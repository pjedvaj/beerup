import React from 'react';
import { NavLink } from 'react-router-dom';

import Symbol from '../../common/assets/symbol.svg';
import Logo from '../../common/assets/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header--container">
                <div className="header__graphics">
                    <img className="header__symbol" src={Symbol} alt="Beerup symbol"/>
                    <img className="header__logo" src={Logo} alt="Beerup logo"/>
                </div>
                <nav className="header__nav">
                    <NavLink className="header__link" exact to="/beerup">Home</NavLink>
                    <NavLink className="header__link" exact to="/favorites">Favorites</NavLink>
                    <NavLink className="header__link__join" exact to="/join">JOIN</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;
