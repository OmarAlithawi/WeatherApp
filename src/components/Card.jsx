import React, { useState } from 'react';
import {useSelector} from 'react-redux'

const Card = () =>  {
        // weather and img data
        const weatherData = useSelector(state => state.weatherDataReducer)
        const img = useSelector(state => state.imagesDataReducer)
       const cardRender = () =>{

           return(  <div className="card mt-3 newCard" >
                <img className="card-img-top" src={img.hits[0].largeImageURL} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{weatherData.name}</h5>
                    <p className="card-text">{"Temprture is :"+" "+ Math.round((weatherData.main.temp) - 273 )+" " +"C"}</p>
                    <p className="card-text">{"Feels like :"+" "+ Math.round((weatherData.main.feels_like) - 273 )+" " +"C"}</p>
                    <a href="#" className="btn btn-primary">More Information</a>
                </div>
            </div>
               
           )
           
        }

   
    
        return (
            <div className = "container">
             {weatherData.main ? cardRender():null}
            </div>
        )
}


export default Card
