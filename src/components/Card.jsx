import React, { useState } from 'react';
import {useSelector} from 'react-redux'

const Card = (props) =>  {
        // weather and img data

        return (
            <>
                <div className="card mt-3 newCard col-m-4" >
                    <img className="card-img-top" src={props.img.hits[0].largeImageURL} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.weatherData.name}</h5>
                        <p className="card-text">{"Temprture is :"+" "+ Math.round((props.weatherData.main.temp) - 273 )+" " +"C"}</p>
                        <p className="card-text">{"Feels like :"+" "+ Math.round((props.weatherData.main.feels_like) - 273 )+" " +"C"}</p>
                        <button  className="btn btn-primary">More Information</button>
                        <button onClick ={() => props.deleteCard(props.weatherData.name)} className="btn btn-primary BTN">  X</button>
                    </div>
                </div>
            </>
        )
        
}


export default Card
