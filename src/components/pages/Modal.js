import React from 'react';

import Close from '../../common/assets/close.svg';

const Modal = (props) => {
  
    return (
    <div className="modal__window" onKeyDown={props.closeModal}>
        <div className="modal__cover" onClick={props.toggleModal}></div>
        <div className="modal">
            <label className="modal__heart modal__heart__container">
                <input className="modal__heart__hide" value={props.beer.id} type="checkbox" checked={props.beer.favorite === true} onChange={event => props.toggleFav(event)} />
                <span className="modal__heart__checkmark"></span>
            </label>
            <img className="modal__close" src={Close} alt="Close icon" onClick={props.toggleModal}/>
            <div className="modal__container">
                <img className="modal__beer" src={props.beer.image_url} alt="Beer"/>
                <div className="modal__info">
                    <h1 className="modal__name">{props.beer.name}</h1>
                    <label className="modal__ibu">
                        IBU
                        <span className="ibu__val">{props.beer.ibu}</span>
                    </label>
                    <label className="modal__abv">
                        ABV
                        <span className="abv__val">{props.beer.abv}%</span>
                    </label>
                    <p className="modal__desc">{props.beer.description}</p>
                </div>
                <button className="modal__crate" type="button" value={props.beer.id} onClick={event => props.addToCrate(event)}>ADD TO CRATE</button>
            </div>
        </div>
    </div>
    )

}

export default Modal;
