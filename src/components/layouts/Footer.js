import React from 'react';
import { NavLink } from 'react-router-dom';

import Cap from '../../common/assets/cap.svg';
import Symbol from '../../common/assets/symbol.svg';
import Logo from '../../common/assets/logo.svg';
import Facebook from '../../common/assets/facebook.svg';
import Twitter from '../../common/assets/twitter.svg';
import LinkedIn from '../../common/assets/Linked In.svg';
import Pinterest from '../../common/assets/pininterest.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__cap" src={Cap} alt="Beerup cap"/>
            <div className="footer--css">
                <div className="footer--container">
                    <div className="footer__graphics">
                        <img className="footer__symbol" src={Symbol} alt="Beerup symbol"/>
                        <img className="footer__logo" src={Logo} alt="Beerup logo"/>
                    </div>
                    <nav className="footer__nav">
                        <NavLink className="footer__link" exact to="/beerup">HOME</NavLink>
                        <NavLink className="footer__link" exact to="/favorites">FAVORITES</NavLink>
                        <NavLink className="footer__link" exact to="/join">JOIN</NavLink>
                    </nav>
                    <div className="footer__social">
                        <a href="https://www.facebook.com" className="facebook"><img src={Facebook} alt="Facebook"/></a>
                        <a href="https://twitter.com" className="twitter"><img src={Twitter} alt="Twitter"/></a>
                        <a href="https://www.linkedin.com" className="linkedin"><img src={LinkedIn} alt="LinkedIn"/></a>
                        <a href="https://www.pinterest.com" className="pinterest"><img src={Pinterest} alt="Pinterest"/></a>
                    </div>
                    <hr className="footer__line"></hr>
                    <small className="footer__legal">&copy; 2018 All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;