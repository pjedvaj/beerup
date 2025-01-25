import React from 'react';

const Card = (props) => {

    return (
        <div key={props.beer.id} className="card--beer">
            <div className="card--beer--left">
                <label className="card__heart card__heart__container">
                    <input className="card__heart__hide" type="checkbox" checked={props.beer.favorite === true} value={props.beer.id} onChange={event => props.toggleFav(event)}/>
                    <span className="card__heart__checkmark"></span>
                </label>
                <img className="card__img" src={props.beer.image_url} alt="Beer"/>  
            </div>
            <div className="card--beer--right">
                <button value={props.beer.id} onClick={event => props.toggleModal(event)}>{props.beer.name.substring(0,26)}</button>
                <div className="card--beer--values">
                    <h4>IBU</h4>
                    <p>{props.beer.ibu}</p>
                    <br></br>
                    <h4>ABV</h4>
                    <p>{props.beer.abv}%</p>
                </div>
            </div>
        </div>
    )
}

export default Card;