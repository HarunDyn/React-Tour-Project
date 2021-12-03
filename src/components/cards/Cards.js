import React from 'react';
import "./Cards.css";

function Cards(props) {
    return (
        <div className="cards">
            <div className="card">
                <h3>{props.Name}</h3>
                <div className="img">
                <img src={props.Url} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, temporibus!</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default Cards
