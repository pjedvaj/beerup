import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Symbol from '../../common/assets/symbol.svg';
import Logo from '../../common/assets/logo.svg';
import Illustration from '../../common/assets/illustration.svg';

const Menu = () => {

    /* Hooks */
    const [hidden, setHidden] = useState(false);

    /* Toggle menu */
    const toggle = () => {
      setHidden(!hidden);
    };

    return (
      <div className="menu__container">
          <div className="menu__open" onClick={toggle}></div>

          { hidden ? (

            <div className="menu">
              <div className="menu__close" onClick={toggle}></div>
              <div className="menu__graphics">
                  <img className="menu__symbol" src={Symbol} alt="Beerup symbol"/>
                  <img className="menu__logo" src={Logo} alt="Beerup logo"/>
              </div>
              <nav className="menu__links">
                  <NavLink className="menu__home" exact to="/beerup" onClick={toggle}>HOME</NavLink>
                  <hr className="menu__line"></hr>
                  <NavLink className="menu__favorites" exact to="/favorites" onClick={toggle}>FAVOURITES</NavLink>
                  <img className="menu__illustration" src={Illustration} alt="Beer Box illustration"/>
                  <NavLink className="menu__join" exact to="/join" onClick={toggle}>JOIN BEERUP</NavLink> 
              </nav>
            </div>

          ) : null }

      </div>
    )
    
  }

export default Menu;
